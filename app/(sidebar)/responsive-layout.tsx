"use client";

import { NavRail } from "@/app/(sidebar)/nav-rail";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  sidebar: ReactNode;
};

export function ResponsiveLayout({ sidebar, children }: Props) {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>{sidebar}</DrawerContent>
        </Drawer>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex">
        <NavRail />
        <main className="flex-1">{children}</main>
        {/* <ResizablePanelGroup direction="horizontal" className="w-full">
          <ResizablePanel collapsible collapsedSize={10} defaultSize={10} maxSize={} className="h-screen">
            <div className="h-screen overflow-auto">{sidebar}</div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="h-screen overflow-auto">{children}</div>
          </ResizablePanel>
        </ResizablePanelGroup> */}
      </div>
    </>
  );
}
