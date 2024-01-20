export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Hack = {
  id: string;
  title: string;
  categoryIds: string[];
};
