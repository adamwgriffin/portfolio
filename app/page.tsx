import { AnimatedProseSection } from "@/components/AnimatedProseSection";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/config";

export default function Page() {
  return (
    <AnimatedProseSection>
      <Image
        src="/adam-1-transparent.png"
        alt="Photo of Adam Griffin"
        className="rounded-full bg-fuchsia-100 block mx-auto sm:mb-1
          sm:float-right"
        width={160}
        height={160}
        priority
      />
      <p>
        I&apos;m a web developer living in Seattle, WA. My tech stack has
        primarily been Ruby on Rails, Postgres, React and Vue in my career. My
        main role has been as a full stack developer but I&apos;ve always had a
        strong interest in frontend development. I&apos;ve worked on several
        real estate (Proptech) SaaS apps over the years, such as listing search
        and a CRM.
      </p>
      <p>
        In my spare time I mostly use Typescript with Next.js and Node. I&apos;m
        fond of{" "}
        <a href="https://koajs.com/#introduction" target="_blank">
          Koa
        </a>{" "}
        as a backend framework too. I use MongoDB a lot because I find it easy
        to iterate quickly with it, but I&apos;m also a big fan of Postgres. You
        can check out <Link href="/projects">my projects</Link>, or my{" "}
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        , to see some of the stuff I work on.
      </p>
      <p>
        Occasionally I dabble in Go and the Gin web framework. I enjoy the
        emphasis on simplicity in the language but I have yet to truly become a
        &quot;Gopher.&quot; Maybe someday. I&apos;ve also been looking at Kotlin
        but have yet to dive in. Recently, I&apos;ve taken more of an interest
        in DevOps. I&apos;ve taken a class on Kubernetes and written a few
        things with it. I&apos;m also interested in IAC tools like Terraform. So
        much tech to learn, so little time!
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
        . If you just want to connect, check me out on{" "}
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          Bluesky
        </a>
        .
      </p>
    </AnimatedProseSection>
  );
}
