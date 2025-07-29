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
          My experience mainly involves working as a full stack developer, with
          Ruby on Rails on the backend and React, Angular or Vue on the
          frontend, with Postgresql as the database. The apps I worked on had a
          kind of hybrid monolith architecture where the app had its own
          database for data it controlled but relied on several different
          microservices for things like authentication or sending email
          notifications. I occasionally worked on services too, such as our
          payment service. You can check out the search feature I worked on at
          several brokerages sites, such as{" "}
          <a
            href="https://cbdanforth.sites.cbmoxi.com/search"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coldwell Banker Danforth
          </a>{" "}
          or{" "}
          <a
            href="https://www.windermere.com/search"
            target="_blank"
            rel="noopener noreferrer"
          >
            Windermere
          </a>
          .
        </p>
        <p>
          Although I&apos;ve only worked for one company as a software engineer,
          I worked at that company for a long time, on many different projects.
          I got my start as an engineer by working my way up through the
          company. I began as an Office Manager, then became a Support Rep, then
          finally a developer. I&apos;m a self-taught developer. I learned a lot
          of what I know on the job but I also had been coding as a hobby for
          years before that.
        </p>

        <p>These are the two main jobs I had as a developer:</p>
      </div>
      <ul>
        <li className="prose mb-12">
          <h2>Software Engineer</h2>
          <div>
            <a href="https://moxiworks.com/" target="_blank">
              MoxiWorks
            </a>
          </div>
          <div>Seattle, WA</div>
          <div>Nov 2016 - May 2024 · 7 yrs 7 mos</div>
          <p>
            I worked as a full stack developer on several SaaS web app products
            that are used by many well-known real estate brokerages, such as
            Coldwell Banker, eXp Realty and Century 21. I was the lead developer
            on some of the products I worked on, such as listing search. The
            projects I worked on all used Ruby on Rails for the backend along
            with React, Angular or Vue for the frontend.
          </p>
          <h3>Responsibilities</h3>
          <ul>
            <li>
              Lead developer on real estate listing search. The search feature
              powers many brokerage/agent websites. It&apos;s also used in
              several other products, like the CRM and CMA apps.
            </li>
            <li>
              Worked on company&apos;s flagship product, a CRM for real estate
              agents that is used to manage their contacts and listing
              transactions, as well as do email marketing campaigns. I worked on
              some of this team&apos;s more high stakes projects. I also
              provided support/mentoring to some of the more junior devs on the
              team.
            </li>
            <li>
              Lead developer on the Advertising Platform product, a marketing
              tool for automating the creation of real estate listing ads.
            </li>
            <li>
              Lead developer on an administrative app for real estate companies
              to manage their agents and listings. It was also used for backend
              tools for our company. This involved a lot of role-based
              permissions, so that only certain admins could edit different
              types of office info or listing data.
            </li>
            <li>
              Worked on CMA, a presentation builder that uses listing data to
              create a comparative market analysis (CMA) for clients looking to
              buy or sell a home. I worked on both the listing search and
              presentation pages for this project.
            </li>
          </ul>
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
            devoted to developing software tools for the team. I also worked on
            some of the company&apos;s customer facing products as well.
          </p>
          <h3>Responsibilities</h3>
          <ul>
            <li>Created Support Admin app for Client Services department</li>
            <li>
              Investigated issues for Account Management team. These were
              important issues that had been escalated by our clients directly
              to whoever was handling their account.
            </li>
            <li>
              Managed &quot;Support Triage&quot; in our ticketing system to
              ensure ticket quality and handle any issues that I was able to fix
              myself before handing off to other departments
            </li>
          </ul>
        </li>
      </ul>
    </AnimatedSection>
  );
}
