import { Title } from "@/components/typeography/title";
import { getCategoryBySlug } from "@/modules/notion";
import { Category } from "@/modules/notion/types";
import { notFound } from "next/navigation";

type Props = {
  params: {
    categorySlug: string[];
  };
};

export default async function Page({ params }: Props) {
  let categoryName = "All";
  let category: null | Category;
  if (!!params.categorySlug) {
    category = await getCategoryBySlug(params.categorySlug[0]);
    if (!category) return notFound();
    categoryName = category.name;
  }

  return (
    <div className="p-4">
      <Title level={1}>{categoryName}</Title>
    </div>
  );
}
