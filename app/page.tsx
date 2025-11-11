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
        className="rounded-full shape-circle block mx-auto sm:m-1 sm:float-right
          bg-gradient-to-tr from-purple-300 to-pink-100 dark:from-purple-400
          dark:to-pink-200 to-50%"
        width={160}
        height={160}
        priority
      />
      <p>
        I&apos;m a web developer living in Seattle, WA. In my spare time
        I&apos;ve been using Typescript with Next.js and Node. I&apos;ve built a
        couple things with Rails too. I use Postgres or MongoDB for my database.
        You can check out <Link href="/projects">my projects</Link>, or my{" "}
        <a href={socialLinks.github} target="_blank">
          Github
        </a>
        , to see some of the stuff I work on.
      </p>

      <p>
        At work, my tech stack has primarily been Ruby on Rails, Postgres and
        React/Angular/Vue. My job has been as a full stack developer. I&apos;ve
        worked on several real estate (Proptech) SaaS apps over the years, such
        as listing search and a{" "}
        <a
          href="https://moxiworks.com/solutions/real-estate-crm/"
          target="_blank"
        >
          CRM
        </a>
        . You can see the listing search I worked on in production at{" "}
        <a href="https://www.windermere.com/search" target="_blank">
          Windermere.com
        </a>
        , one of the many sites where it has been deployed.
      </p>

      <p>
        If you have a role you think I might be interested in, hit me up via{" "}
        <a href={socialLinks.email} target="_blank">
          email
        </a>{" "}
        or message me on{" "}
        <a href={socialLinks.linkedin} target="_blank">
          LinkedIn
        </a>
        .
      </p>
    </AnimatedSection>
  );
}
