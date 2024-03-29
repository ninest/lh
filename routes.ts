import { Category } from "@/modules/notion/types";
import { ContentType } from "@/types";

export const routes = {
  home: () => "/",
  type: (type: ContentType) => `/${type.slug}`,
  category: (type: ContentType, category: Pick<Category, "slug">) => `/${type.slug}/${category.slug}`,
};
