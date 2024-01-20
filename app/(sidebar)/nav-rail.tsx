"use client";

import { useIsActive } from "@/hooks/use-is-active";
import { routes } from "@/routes";
import { cn } from "@/utils/style";
import Link from "next/link";
import { ComponentProps } from "react";
import { FaBoltLightning, FaBookAtlas, FaNewspaper } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";

export function NavRail({ className }: ComponentProps<"div">) {
  return (
    <aside
      className={cn(className, "sticky top-0 flex-none w-[4rem] border-r h-screen flex p-4 flex-col justify-between")}
    >
      <Link href={routes.home()} className="flex items-center justify-center font-bold">
        LH
      </Link>

      <div className="p-2 space-y-2">
        <LinkButton href={"/"} title={"Life Hacks"}>
          <FaBoltLightning />
        </LinkButton>
        <LinkButton href={"/"} title={"News"}>
          <FaNewspaper />
        </LinkButton>
        <LinkButton href={"/"} title={"Facts"}>
          <FaBookAtlas />
        </LinkButton>
      </div>

      <div className="p-2 space-y-2">
        <LinkButton href={"/"} title={"Facts"}>
          <LuSettings2 />
        </LinkButton>
      </div>
    </aside>
  );
}

function LinkButton({ title, href, children }: { title: string; href: string } & ComponentProps<"div">) {
  const isActive = useIsActive({ href, parent: true });

  return (
    <Link
      href={href}
      className={cn("w-full flex items-center justify-center rounded-md py-3 text-lg", {
        // "bg-gray-100 dark:bg-gray-800": isActive,
        "text-gray-800 dark:text-gray-200": isActive,
        "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800": !isActive,
      })}
    >
      {children}
    </Link>
  );
}
