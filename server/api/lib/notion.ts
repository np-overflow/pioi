import { Client } from '@notionhq/client'

const runtimeConfig = useRuntimeConfig()

export const notion = new Client({ auth: runtimeConfig.notionKey })
export const dbID = runtimeConfig.notionDB
