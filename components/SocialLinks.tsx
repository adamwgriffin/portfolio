import { SocialLink } from "./SocialLink";
import { socialLinks } from "@/lib/config";
import { FaGithub, FaLinkedinIn, FaBluesky, FaRss } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

export function SocialLinks() {
  return (
    <div
      className="flex text-lg gap-4 transition-opacity duration-300
        hover:opacity-90"
    >
      <SocialLink href={socialLinks.github}>
        <FaGithub />
      </SocialLink>
      <SocialLink href={socialLinks.linkedin}>
        <FaLinkedinIn />
      </SocialLink>
      <SocialLink href={socialLinks.email}>
        <TbMailFilled />
      </SocialLink>
      <SocialLink href={socialLinks.bluesky}>
        <FaBluesky />
      </SocialLink>
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}
