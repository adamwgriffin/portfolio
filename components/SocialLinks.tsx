import { socialLinks } from "@/lib/config";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SocialLink } from "./SocialLink";

export function SocialLinks() {
  return (
    <nav className="flex gap-4">
      <SocialLink href={socialLinks.github}>
        <FaGithub className="text-xl" />
      </SocialLink>
      <SocialLink href={socialLinks.linkedin}>
        <FaLinkedinIn className="text-xl" />
      </SocialLink>
      <SocialLink href={socialLinks.email}>
        <TbMailFilled className="text-xl" />
      </SocialLink>
      {/* <SocialLink href="/rss.xml" target="_self">
        <FaRss />
      </SocialLink> */}
    </nav>
  );
}
