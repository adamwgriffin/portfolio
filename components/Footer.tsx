import { metaData } from "@/lib/config";
import { SocialLinks } from "./SocialLinks";
import { AnimatedFadeInDiv } from "@/components/AnimatedFadeInDiv";

export function Footer() {
  return (
    <footer className="text-zinc-600 dark:text-zinc-300 py-12">
      <AnimatedFadeInDiv className="flex items-center justify-between">
        <small>
          © <time dateTime="YYYY">{new Date().getFullYear()}</time>{" "}
          {metaData.title}
        </small>
        <SocialLinks />
      </AnimatedFadeInDiv>
    </footer>
  );
}
