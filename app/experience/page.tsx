import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Adam Griffin's Experience"
};

export default function Page() {
  return (
    <section
      className="prose prose-p:text-zinc-600 dark:prose-p:dark:text-zinc-300"
    >
      <p>
        In tempus volutpat iaculis. Donec felis turpis, dictum hendrerit mollis
        in, mollis non mi. Quisque ut lacus a sem ultrices dignissim. Ut
        malesuada purus in purus eleifend, et laoreet arcu varius. Mauris
        aliquet cursus magna, sit amet venenatis ex malesuada egestas. Quisque
        pharetra euismod nisl ut semper. Donec porttitor mattis augue, et
        posuere ligula ornare a. Suspendisse leo mi, mollis cursus tempus sit
        amet, lobortis ut quam. Curabitur sit amet dui augue.
      </p>
    </section>
  );
}
