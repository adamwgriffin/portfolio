import { AnimatedSection } from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/config";

export default function Page() {
  return (
    <AnimatedSection className="prose">
      <Image
        src="/adam-1-transparent.png"
        alt="Photo of Adam Griffin"
        className="rounded-full block mx-auto sm:mb-1 sm:float-right
          bg-gradient-to-tr from-purple-300 to-pink-100 dark:from-purple-400
          dark:to-pink-200 to-50%"
        width={160}
        height={160}
        priority
      />
      <p>
        I&apos;m a web developer living in Seattle, WA. In my spare time I
        mostly use Typescript with Next.js and Node. I&apos;m fond of{" "}
        <a href="https://koajs.com/" target="_blank">
          Koa
        </a>{" "}
        as a backend framework too. I use MongoDB a lot but I&apos;m also a fan
        of Postgres. Occasionally I dabble in Go and the Gin web framework. I
        enjoy the emphasis on simplicity in the language but I have yet to truly
        become a &quot;Gopher.&quot; Maybe someday. You can check out{" "}
        <Link href="/projects">my projects</Link>, or my{" "}
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        , to see some of the stuff I work on.
      </p>

      <p>
        At work my tech stack has primarily been Ruby on Rails, Postgres and
        React/Angular/Vue. My job has been as a full stack developer but
        I&apos;ve always had a strong interest in frontend development.
        I&apos;ve worked on several real estate (Proptech) SaaS apps over the
        years, such as listing search and a CRM.
      </p>

      <p>
        If you have a role you think I might be interested in, hit me up via{" "}
        <a href={socialLinks.email} target="_blank" rel="noopener noreferrer">
          email
        </a>{" "}
        or message me on{" "}
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </AnimatedSection>
  );
}
