import { metaData } from "app/lib/config";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="block text-sm text-zinc-600 dark:text-zinc-300 py-12">
      <time>© {new Date().getFullYear()}</time> {metaData.title}
      <SocialLinks />
    </footer>
  );
}
