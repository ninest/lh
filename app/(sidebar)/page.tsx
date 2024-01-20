import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <>
      <section className="p-4 flex justify-end">
        <Input placeholder="Search ..." className="md:max-w-[20rem]" />
      </section>
    </>
  );
}
