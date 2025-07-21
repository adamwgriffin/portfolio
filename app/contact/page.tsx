import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Adam Griffin"
};

export default function Page() {
  return (
    <section
      className="prose prose-p:text-zinc-600 dark:prose-p:dark:text-zinc-300"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac elit
        tempus, suscipit eros a, gravida metus. Sed ac congue dui. Vivamus
        consectetur consectetur posuere. Morbi rhoncus odio diam. Sed ultricies
        risus risus, id vulputate purus luctus in. Donec ut molestie odio, vitae
        ultricies enim.
      </p>
    </section>
  );
}
