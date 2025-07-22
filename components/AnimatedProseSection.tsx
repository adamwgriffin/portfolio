import { AnimatedSection } from "@/components/AnimatedSection";

export function AnimatedProseSection({
  children
}: {
  children: React.ReactNode;
}) {
  return <AnimatedSection className="prose">{children}</AnimatedSection>;
}
