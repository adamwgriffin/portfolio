import { metaData } from "app/lib/config";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {new Date().getFullYear()}</time> {metaData.title}
      <SocialLinks />
    </footer>
  );
}
