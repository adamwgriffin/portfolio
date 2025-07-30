import { socialLinks } from "@/lib/config";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { SocialLink } from "./SocialLink";

export function SocialLinks() {
  return (
    <div
      className="flex text-lg gap-4 transition-opacity duration-300
        hover:opacity-90"
    >
      <SocialLink href={socialLinks.github}>
        <FaGithub className="text-xl" />
      </SocialLink>
      <SocialLink href={socialLinks.linkedin}>
        <FaLinkedinIn className="text-xl" />
      </SocialLink>
      <SocialLink href={socialLinks.email}>
        <TbMailFilled className="text-xl" />
      </SocialLink>
      {/* <a
        href="/rss.xml"
        target="_self"
        className="transition-all duration-300 hover:text-zinc-400"
      >
        <FaRss />
      </a> */}
    </div>
  );
}
