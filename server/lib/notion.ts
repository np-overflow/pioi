import {Client} from '@notionhq/client'

const {notionKey, notionDB} = useRuntimeConfig()

export const notion = new Client({auth: notionKey})
export const dbID = notionDB
