import { metaData } from "app/lib/config";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="block text-[#1C1C1C] dark:text-[#D4D4D4] py-6">
      <time className="text-sm">© {new Date().getFullYear()}</time> {metaData.title}
      <SocialLinks />
    </footer>
  );
}
