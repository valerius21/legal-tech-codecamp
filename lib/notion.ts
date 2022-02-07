import { Client } from "@notionhq/client";
import invariant from 'tiny-invariant'

const TOKEN = process.env.NOTION_TOKEN
const DATABASE_ID = process.env.NOTION_DATABASE_ID

invariant(TOKEN, 'Please set the NOTION_TOKEN environment variable')
invariant(DATABASE_ID, 'Please set the NOTION_DATABASE_ID environment variable')

export const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export const getDatabase = async (databaseId: string) => {
    const { results } = await notion.databases.query({
        database_id: databaseId,
    })

    return results
}

export const getPage = async (pageId: string) => {
    const res = await notion.pages.retrieve({ page_id: pageId })
    return res
}

export const getBlocks = async (blockId: string) => {
    const blocks = [];
    let cursor;
    while (true) {
        const { results, next_cursor } = (await notion.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        })) as any;
        blocks.push(...results);
        if (!next_cursor) {
            break;
        }
        cursor = next_cursor;
    }
    return blocks;
}

export {
    DATABASE_ID,
    TOKEN
}
