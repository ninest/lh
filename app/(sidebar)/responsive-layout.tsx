"use client";

import { MobileNavbar } from "@/app/(sidebar)/mobile-navbar";
import { NavRail } from "@/app/(sidebar)/nav-rail";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useIsActive } from "@/hooks/use-is-active";
import { routes } from "@/routes";
import { ContentTypes } from "@/types";
import { cn } from "@/utils/style";
import Link from "next/link";
import { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { FaBoltLightning, FaBookAtlas, FaNewspaper } from "react-icons/fa6";

type Props = PropsWithChildren & {
  sidebar: ReactNode;
};

export function ResponsiveLayout({ sidebar, children }: Props) {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden relative">
        <MobileNavbar />
        <aside className="fixed bottom-0 left-0 right-0 w-full">
          {/* Mobile tab bar */}
          <div className="px-4 py-1 border-t flex items-center justify-around">
            <MobileTabBarButton href={routes.type(ContentTypes.lifeHack)} title="Hacks">
              <FaBoltLightning />
            </MobileTabBarButton>
            <MobileTabBarButton href={routes.type(ContentTypes.newsArticle)} title={ContentTypes.newsArticle.name}>
              <FaNewspaper />
            </MobileTabBarButton>
            <MobileTabBarButton href={routes.type(ContentTypes.fact)} title={ContentTypes.fact.name}>
              <FaBookAtlas />
            </MobileTabBarButton>
          </div>
        </aside>
        <main>{children}</main>
        {/* <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>{sidebar}</DrawerContent>
        </Drawer> */}
      </div>

      {/* Desktop */}
      <div className="hidden md:flex">
        <NavRail />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}

function MobileTabBarButton({ title, href, children }: { title: string; href: string } & ComponentProps<"div">) {
  const isActive = useIsActive({ href, parent: true });
  return (
    <Link
      href={href}
      className={cn("flex flex-col items-center space-y-1 px-6 py-2 rounded-md", { "text-gray-500": !isActive })}
    >
      <div className="text-xl">{children}</div>
      <div
        className={cn("transition-all", {
          "text-[0rem]": !isActive,
          "text-xs": isActive,
        })}
      >
        {title}
      </div>
    </Link>
  );
}
