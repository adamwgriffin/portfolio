import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Adam Griffin's Projects"
};

export default function Projects() {
  return (
    <section
      className="prose prose-p:text-zinc-600 dark:prose-p:dark:text-zinc-300"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        placerat ex in facilisis consectetur. Quisque laoreet, elit at rutrum
        convallis, diam enim iaculis turpis, in congue nunc magna in mi. Donec
        in vulputate ligula. Donec dictum porttitor odio a porttitor. Vivamus
        vel elit commodo, aliquam nisl ac, aliquam dui. Duis accumsan eros a
        convallis hendrerit. Cras sagittis, ligula in pretium cursus, nisi metus
        tincidunt ante, eu euismod magna ligula ut arcu. Aenean ornare mi vel
        tellus euismod convallis. Curabitur vel nulla varius, elementum urna ut,
        porta purus. Praesent nec elit sed quam vestibulum varius vitae at nunc.
        Nunc sagittis ante at luctus imperdiet. Mauris vitae velit enim.
      </p>
    </section>
  );
}
