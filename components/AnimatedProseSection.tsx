import { AnimatedSection } from "@/components/AnimatedSection";

export function AnimatedProseSection({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatedSection
      className="prose prose-p:text-zinc-600 dark:prose-p:dark:text-zinc-300"
    >
      {children}
    </AnimatedSection>
  );
}
