import { Client } from '@notionhq/client'

const { notionKey = globalThis.notionKey, notionDB = globalThis.notionDB  } = useRuntimeConfig()

export const notion = new Client({ auth: notionKey })
export const dbID = notionDB
