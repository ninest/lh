import { invariant } from "@epic-web/invariant";

invariant(process.env.NOTION_API_KEY, "Missing NOTION_API_KEY");

export const env = {
  NOTION_API_KEY: process.env.NOTION_API_KEY,
};
