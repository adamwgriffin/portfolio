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
          frontend, with PostgreSQL as the database. The apps I worked on had a
          kind of hybrid monolith architecture where the app had its own
          database for data it controlled but relied on several different
          microservices for things like authentication or sending email
          notifications. I occasionally worked on services too, such as our
          payment service. You can check out the search feature I worked on at
          several brokerages sites, such as{" "}
          <a href="https://cbdanforth.sites.cbmoxi.com/search" target="_blank">
            Coldwell Banker Danforth
          </a>{" "}
          or{" "}
          <a href="https://www.windermere.com/search" target="_blank">
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
          <h2>Senior Software Engineer</h2>
          <div>
            <a href="https://moxiworks.com/" target="_blank">
              MoxiWorks
            </a>
          </div>
          <div>Seattle, WA</div>
          <div>Nov 2016 - May 2024</div>
          <p>
            I worked as a full stack developer on several SaaS web app products
            that are used by many well-known real estate brokerages, such as
            Coldwell Banker, eXp Realty and Century 21. I was the lead developer
            on some of the products I worked on, such as listing search. The
            projects I worked on all used Ruby on Rails for the backend along
            with React, Angular or Vue for the frontend.
          </p>
          <h3>Accomplishments</h3>
          <ul>
            <li>
              Lead developer on a real estate search feature used on around
              400,000 sites catering to brokerages, offices, and individual
              agents. This included some high traffic sites such as{" "}
              <a href="https://www.windermere.com/" target="_blank">
                windermere.com
              </a>{" "}
              and{" "}
              <a href="https://www.c21.ca/" target="_blank">
                c21.ca
              </a>
              . The feature was also used in our CRM and CMA proptech products.
            </li>
            <li>
              Helped create a feature to allow 60k users from our largest client
              to automatically migrate their CRM email sync accounts to new
              email hosting providers.
            </li>
            <li>
              Worked to identify and fix an issue for one of our most important
              clients that was blocking 10k customers from using our product. We
              shipped a large feature to fix the issue within a few weeks and I
              received a personal thank you from our CEO for my work on it.
            </li>
            <li>
              Improved performance of our CRM bulk group update feature so that
              it took a few seconds, rather than a few minutes, to update
              contacts that belong to a group, fixing an issue that effected
              hundreds of users trying to send out bulk emails to their clients.
            </li>
            <li>
              Lead a team of developers working on an ad creation feature that
              created real estate listing ads automatically based on an
              office&apos;s real estate listing data, which helped generate
              additional revenue for the company.
            </li>
            <li>
              Lead a team of developers working on a Canadian Anti-Spam
              Legislation (CASL) feature that allowed real estate agents to
              manage compliance with anti-spam laws throughout our system.
            </li>
            <li>
              Took the initiative to eliminate unnecessary logging in our CRM
              app cutting expensive log ingestion service costs in half.
            </li>
            <li>
              Created self-service features for our largest customer to allow
              them to manage their own company admin in our system, reducing
              one-third of the requests that were coming into Support.
            </li>
            <li>
              Mentored and assisted a team of seven developers through pair
              programming and code review.
            </li>
            <li>
              Added I18n language support and currency rate conversion to our
              website search so that users could display French and view listing
              prices adjusted for Canadian dollars on the Century 21 Canada site
              (
              <a href="https://www.c21.ca/" target="_blank">
                c21.ca
              </a>
              ).
            </li>
            <li>
              Worked with a cross-functional team to integrate the search
              feature I worked on into our CRM app to create a new saved search
              feature where agents could search for real estate listings via a
              map search and create a saved search to collaborate with their
              clients.
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
            some of the companys customer facing products as well. When I was
            writing code in this role my tech stack was Ruby on Rails,
            Javascript with jQuery, Sass for CSS styling and Postgres for the
            database.
          </p>
          <h3>Accomplishments</h3>
          <ul>
            <li>
              Created app for Tech Support that made it much easier to
              accomplish tasks that previously required lots of technical
              knowledge and the ability to run arcane commands in the terminal.
              The app was still in use 9 years after I originally made it.
            </li>
            <li>
              Helped build the Roster app which allowed us to finally remove the
              remainder of our old legacy codebase, accomplishing an important
              goal for the Engineering team.
            </li>
            <li>
              Created a tool to automatically migrate customer contacts from our
              old system into a new one. This tool dramatically accelerated the
              process since agents were having to manually convert the contacts
              themselves using a spreadsheet.
            </li>
            <li>
              Developed software to automate troubleshooting of real estate
              listing data issues.
            </li>
            <li>
              Investigated important issues for clients that were escalated to
              the Account Management team.
            </li>
          </ul>
        </li>
      </ul>
    </AnimatedSection>
  );
}
