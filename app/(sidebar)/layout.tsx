import { ResponsiveLayout } from "@/app/(sidebar)/responsive-layout";
import { NavRail } from "@/app/(sidebar)/nav-rail";
import { PropsWithChildren } from "react";

export default function NavRailLayout({ children }: PropsWithChildren) {
  return <ResponsiveLayout sidebar={<NavRail />}>{children}</ResponsiveLayout>;
}
