import {dbID, notion} from '../lib/notion'

const {turnstileSecretKey} = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {name, email, school, joining, workshops, turnstile} = body
  const ip = event.req.headers["CF-Connecting-IP"]

  const formData = new FormData();
  formData.append('secret', turnstileSecretKey);
  formData.append('response', turnstile);
  formData.append('remoteip', ip as string);

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
  const result = await fetch(url, {
    body: formData,
    method: 'POST',
  });

  const outcome = await result.json();
  if (!outcome.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Turnstile verification failed!'
    })
  }

  const hasRegistered = await notion.databases.query({
    database_id: dbID,
    filter: {
      property: "Email",
      email: {
        equals: email
      }
    }
  }).then(({ results }) => results.length > 0) 

  if (hasRegistered) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Already registered!'
    })
  }

  try {
    await notion.pages.create({
      parent: {
        database_id: dbID
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        School: {
          select: {
            name: school.toString().toUpperCase(),
          },
        },
        Joining: {
          checkbox: joining,
        },
        Workshops: {
          multi_select: workshops.length > 0 ? workshops.map((day: string) => {
            return {name: day.toString().toUpperCase()}
          }) : [{name: 'NONE'}],
        },
      },
    })
  } catch (e) {
    throw createError({
      statusCode: 404,
      statusMessage: `Error: ${e}`
    })
  }

  return {
    statusCode: 200,
    statusMessage: 'OK',
  }
})
