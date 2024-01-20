export type ContentType = { slug: string; name: string };

const lifeHack: ContentType = { slug: "h", name: "Life hacks" };
const newsArticle: ContentType = { slug: "n", name: "News" };
const fact: ContentType = { slug: "f", name: "Facts" };

export const allContentTypes = [lifeHack,newsArticle,fact]
export const ContentTypes = { lifeHack, newsArticle, fact };
