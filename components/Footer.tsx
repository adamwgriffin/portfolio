import { metaData } from "@/lib/config";
import { SocialLinks } from "./SocialLinks";
import { AnimatedFadeInDiv } from "@/components/AnimatedFadeInDiv";

export function Footer() {
  return (
    <footer className="flex justify-between text-zinc-600 dark:text-zinc-300
      py-12">
      <AnimatedFadeInDiv className="flex items-center text-xs">
        <time>© {new Date().getFullYear()}</time> {metaData.title}
      </AnimatedFadeInDiv>
      <AnimatedFadeInDiv className="flex items-center gap-4">
        <SocialLinks />
      </AnimatedFadeInDiv>
    </footer>
  );
}
