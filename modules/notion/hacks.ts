import { notion } from "@/modules/notion";
import { notionConstants } from "@/modules/notion/constants";
import { Hack } from "@/modules/notion/types";
import { invariant } from "@epic-web/invariant";
import type { PageObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

type GetHacksParams = {
  filters: null | {
    categoryIds: string[];
  };
};

export async function getHacks(params: GetHacksParams = { filters: null }) {
  let query: QueryDatabaseParameters = { database_id: notionConstants.hacksDatabaseId };
  if (params.filters?.categoryIds) {
    const newFilters = params.filters.categoryIds.map((cid) => ({
      property: "Categories",
      relation: { contains: cid },
    }));
    query.filter = {
      or: newFilters,
    };
  }
  const response = await notion.databases.query(query);

  const results = response.results.filter((result): result is PageObjectResponse => "properties" in result);
  return results.map(transform);
}

function transform(row: PageObjectResponse): Hack {
  invariant(row.properties["ID"].type === "unique_id", "ID should be a unqiue ID field");
  invariant(row.properties["Title"].type === "title", "Title should be of type title");
  invariant(row.properties["Categories"].type === "relation", `Categories should be a relation`);

  return {
    id: row.properties["ID"].id,
    title: row.properties["Title"].title[0].plain_text,
    categoryIds: row.properties["Categories"].relation.map((relation) => relation.id),
  };
}
