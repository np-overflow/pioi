import { dbID, notion } from './lib/notion'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)

	const { name, email, school, joining, workshops } = body

	try {
		await notion.pages.create({
			parent: { database_id: dbID },
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
					multi_select: workshops.length > 0 ? workshops.map((day: string) => { return { name: day.toString().toUpperCase() } }) : [{ name: 'NONE' }],
				},
			},
		})
	}
	catch (e) {
		return { status: 404, e }
	}

	return {
		status: 200,
	}
})
