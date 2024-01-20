import { invariant } from "@epic-web/invariant";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// export function validateTitle(row: PageObjectResponse, titleFieldName: string = "Title"):row.properties[titleFieldName].type is "title" {
//   invariant(row.properties[titleFieldName].type === "title", "Title should be of type title");
// }

// export function validateSlug(row: PageObjectResponse, slugFieldName: string = "Slug") {
//   invariant(row.properties["Slug"].type === "rich_text", "Slug should be of type rich text");
//   invariant(row.properties["Slug"].rich_text.length > 0, `Slug should exist for ${row.id}`);
// }
