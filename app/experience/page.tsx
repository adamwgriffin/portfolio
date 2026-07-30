import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Experience",
  description: "Adam Griffin's Experience"
};

export default function Page() {
  return (
    <AnimatedSection>
      <div className="prose mb-12">
        <p>
          My experience mainly involves working with Ruby on Rails on the
          backend and React, Angular or Vue on the frontend, along with
          PostgreSQL for the database. I occasionally worked on services too,
          such as our payment service.
        </p>
        <p>
          I got my start as an engineer by working as a Support Rep, then
          transitioning to software development. I&apos;m a self-taught
          developer. I learned a lot of what I know on the job but I also had
          been coding as a hobby for years before that.
        </p>

        <p>These are the two main jobs I&apos;ve had as a developer:</p>
      </div>
      <ul>
        <li className="prose mb-12">
          <h2>Senior Software Engineer</h2>
          <div>
            <a href="https://moxiworks.com/" target="_blank">
              MoxiWorks
            </a>
          </div>
          <div>Seattle, WA</div>
          <div>Nov 2016 - May 2024</div>
          <p>
            I worked on several SaaS web app products that are used by many
            well-known real estate brokerages, such as Coldwell Banker, eXp
            Realty and Century 21. The projects I worked on all used Ruby on
            Rails for the backend along with React, Angular or Vue for the
            frontend.
          </p>
          <p>
            Some products I worked on included a{" "}
            <a
              href="https://moxiworks.com/solutions/real-estate-crm/"
              target="_blank"
            >
              CRM
            </a>{" "}
            as well as a{" "}
            <a
              href="https://moxiworks.com/solutions/real-estate-cma/"
              target="_blank"
            >
              CMA
            </a>{" "}
            listing presentation app. I was the lead developer on some of the
            products I worked on, such as{" "}
            <a href="https://www.windermere.com/search" target="_blank">
              listing search
            </a>{" "}
            and an{" "}
            <a
              href="https://moxiworks.com/solutions/real-estate-advertising/"
              target="_blank"
            >
              advertising platform
            </a>
            . I was also the lead on an app used for account administration and
            backend tools.
          </p>
        </li>

        <li className="prose mb-12">
          <h2>Client Services Support Developer</h2>
          <div>
            <a href="https://moxiworks.com/" target="_blank">
              MoxiWorks
            </a>
          </div>
          <div>Seattle, WA</div>
          <div>Nov 2014 - Oct 2016 · 2 yrs</div>
          <p>
            This was a unique role that was created specifically for me which
            combined software development for the department with the equivalent
            of Tier 3 support. Half of my time was usually devoted to solving
            more advanced technical issues for our customers, the other half was
            devoted to developing backend software tools for the team. I also
            worked on some customer facing products as well.
          </p>
        </li>
      </ul>
    </AnimatedSection>
  );
}
