import type { Metadata } from "next";
import { AnimatedProseSection } from "@/components/AnimatedProseSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Adam Griffin"
};

export default function Page() {
  return (
    <AnimatedProseSection>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac elit
        tempus, suscipit eros a, gravida metus. Sed ac congue dui. Vivamus
        consectetur consectetur posuere. Morbi rhoncus odio diam. Sed ultricies
        risus risus, id vulputate purus luctus in. Donec ut molestie odio, vitae
        ultricies enim.
      </p>
    </AnimatedProseSection>
  );
}
