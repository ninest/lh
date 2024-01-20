import { Hack } from "@/modules/notion/types";

type Props = { hack: Hack };

export function HackBlock({ hack }: Props) {
  return <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-950">{hack.title}</div>;
}
