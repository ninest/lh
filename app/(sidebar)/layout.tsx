import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { PropsWithChildren } from "react";

export default function SidebarLayout({ children }: PropsWithChildren) {
  return (
    <>
      <ResizablePanelGroup direction="horizontal" className="w-full">
        <ResizablePanel minSize={25} defaultSize={50} maxSize={75} className="h-screen">
          <div className="p-5 h-screen overflow-auto">
          sidebar content here
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="p-5 h-screen overflow-auto">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
