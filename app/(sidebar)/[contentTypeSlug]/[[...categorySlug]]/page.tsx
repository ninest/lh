import { HackBlock } from "@/app/_components/HackBlock";
import { Spacer } from "@/components/spacer";
import { Title } from "@/components/typeography/title";
import { getCategoryBySlug } from "@/modules/notion/categories";
import { getHacks } from "@/modules/notion/hacks";
import { Category } from "@/modules/notion/types";
import { notFound } from "next/navigation";

type Props = {
  params: {
    categorySlug: string[];
  };
};

export default async function Page({ params }: Props) {
  let categoryName = "All";
  let category: null | Category = null;
  if (!!params.categorySlug) {
    category = await getCategoryBySlug(params.categorySlug[0]);
    if (!category) return notFound();
    categoryName = category.name;
  }

  const hacks = category ? await getHacks({ filters: { categoryIds: [category.id] } }) : await getHacks();

  return (
    <div className="p-4">
      <Title level={1}>{categoryName}</Title>
      <Spacer className="h-3" />

      <div className="space-y-2">
        {hacks.map((hack) => (
          <HackBlock key={hack.id} hack={hack} />
        ))}
      </div>
    </div>
  );
}
