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
  return results.map(transform);
}

export async function getCategoryBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: notionConstants.categoriesDatabaseId,
    filter: { property: "Slug", rich_text: { equals: slug } },
  });
  if (response.results.length === 0) return null;
  return transform(response.results[0] as PageObjectResponse);
}

function transform(row: PageObjectResponse): Category {
  // invariant("properties" in row, "Response must contain properties");
  const { properties } = row;
  invariant(properties["Name"].type === "title", "Title should be of type title");
  invariant(properties["Slug"].type === "rich_text", "Slug should be of type rich text");
  invariant(properties["Slug"].rich_text.length > 0, `Slug should exist for ${row.id}`);

  return {
    id: row.id,
    name: properties["Name"].title[0].plain_text,
    slug: properties["Slug"].rich_text[0].plain_text,
  };
}
