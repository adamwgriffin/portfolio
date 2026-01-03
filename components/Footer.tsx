import { metaData } from "@/lib/config";
import { SocialLinks } from "./SocialLinks";
import { AnimatedFadeInDiv } from "@/components/AnimatedFadeInDiv";
import { Year } from "@/components/Year";

export function Footer() {
  return (
    <footer className="text-zinc-600 dark:text-zinc-300 py-12">
      <AnimatedFadeInDiv className="flex items-center justify-between">
        <small>
          © <Year />
          &nbsp;{metaData.title}
        </small>
        <SocialLinks />
      </AnimatedFadeInDiv>
    </footer>
  );
}
