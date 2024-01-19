import { env } from "@/env";
import { notionConstants } from "@/modules/notion/constants";
import { Category } from "@/modules/notion/types";
import { invariant } from "@epic-web/invariant";
import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({ auth: env.NOTION_API_KEY });

export async function getCategories() {
  const response = await notion.databases.query({
    database_id: notionConstants.categoriesDatabaseId,
  });
  const categories: Category[] = [];
  const results = response.results.filter((result): result is PageObjectResponse => "properties" in result);
  for (const row of results) {
    const { properties } = row;

    invariant(properties["Name"].type === "title", "Title should be of type title");
    invariant(properties["Slug"].type === "rich_text", "Slug should be of type rich text");
    invariant(properties["Slug"].rich_text.length > 0, `Slug should exist for ${row.id}`);

    categories.push({
      id: row.id,
      name: properties["Name"].title[0].plain_text,
      slug: properties["Slug"].rich_text[0].plain_text,
    });
  }

  console.log(categories);
}
