"use client";

import { Button } from "@/components/ui/button";
import { useIsActive } from "@/hooks/use-is-active";
import { Category } from "@/modules/notion/types";
import { routes } from "@/routes";
import { ContentType } from "@/types";
import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";

export function TopBar({ contentType, categories }: { contentType: ContentType; categories: Category[] }) {
  return (
    <div className="flex items-center space-x-2 overflow-scroll pr-3 ">
      {categories.map((category) => (
        <TopBarLink key={category.id} contentType={contentType} category={category}>
          {category.name}
        </TopBarLink>
      ))}
    </div>
  );
}

function TopBarLink({
  contentType,
  category,
  children,
}: { contentType: ContentType; category: Category } & PropsWithChildren) {
  const href = routes.category(contentType, category);
  const isActive = useIsActive({ href });
  return (
    <Button variant={isActive ? "default" : "outline"} size={"sm"} asChild>
      <Link href={isActive ? routes.type(contentType) : href}>{children}</Link>
    </Button>
  );
}
