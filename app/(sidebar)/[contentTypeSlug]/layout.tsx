import { TopBar } from "@/app/(sidebar)/[contentTypeSlug]/top-bar";
import { Input } from "@/components/ui/input";
import { getCategories } from "@/modules/notion";
import { allContentTypes } from "@/types";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  params: {
    contentTypeSlug: string;
  };
};

export default async function Layout({ params, children }: Props) {
  const contentType = allContentTypes.find((ct) => ct.slug === params.contentTypeSlug);
  if (!contentType) return notFound();

  const categories = await getCategories();

  return (
    <>
      <section className="p-4 grid grid-cols-[1fr,20rem] min-w-0">
        <div className="min-w-0 flex items-center">
          <TopBar contentType={contentType} categories={categories} />
        </div>
        <Input placeholder={`Search ${contentType.name.toLowerCase()} ...`} />
      </section>
      <div>{children}</div>
    </>
  );
}
