import { routes } from "@/routes";
import { ContentTypes } from "@/types";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  redirect(routes.type(ContentTypes.lifeHack));
}
