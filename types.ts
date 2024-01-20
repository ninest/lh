export type ContentType = { slug: string };

const lifeHack: ContentType = { slug: "h" };
const newsArticle: ContentType = { slug: "n" };
const fact: ContentType = { slug: "f" };

export const ContentTypes = { lifeHack, newsArticle, fact };
