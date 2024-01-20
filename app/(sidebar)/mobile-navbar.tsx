import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";

export function MobileNavbar() {
  return (
    <nav className="p-4 border-b flex items-center justify-between">
      <Link href={routes.home()} className="font-bold">
        LH
      </Link>
      <Button variant={"outline"} size={"icon"}>
        <LuSearch />
      </Button>
    </nav>
  );
}
