import { metaData } from "@/lib/config";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer
      className="flex justify-between text-sm text-zinc-600 dark:text-zinc-300
        py-12"
    >
      <div>
        <time>© {new Date().getFullYear()}</time> {metaData.title}
      </div>
      <div className="flex items-center gap-4">
        <SocialLinks />
      </div>
    </footer>
  );
}
