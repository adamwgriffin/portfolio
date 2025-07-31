import { AccordianItemWithIcon } from "@/components/AccordianItemWithIcon";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Accordion } from "@/components/motion-primitives/accordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Adam Griffin's Tech STack"
};

export default function Page() {
  return (
    <AnimatedSection>
      <div className="prose mb-6">
        <p>
          Here are some of the various technologies that I&apos;ve had
          experience with over the years.
        </p>
      </div>

      <Accordion className="flex w-full flex-col">
        <AccordianItemWithIcon value="languages" title="Languages">
          <div className="px-6 pt-2">
            <ul>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>Coffeescript</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>CSS</li>
              <li>Sass</li>
            </ul>
          </div>
        </AccordianItemWithIcon>

        <AccordianItemWithIcon value="frameworks" title="Frameworks">
          <div className="px-6 pt-2">
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>Vue</li>
              <li>Ruby on Rails</li>
              <li>Koa</li>
              <li>Express</li>
              <li>Backbone</li>
            </ul>
          </div>
        </AccordianItemWithIcon>

        <AccordianItemWithIcon value="data" title="Data">
          <div className="px-6 pt-2">
            <ul>
              <li>PostgreSQL/PostGIS</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>
        </AccordianItemWithIcon>

        <AccordianItemWithIcon value="tools" title="Tools">
          <div className="px-6 pt-2">
            <ul>
              <li>Docker/Docker Compose</li>
              <li>Git</li>
              <li>Jest</li>
              <li>Mocha/Chai</li>
              <li>Rspec</li>
              <li>PDFreactor (service that converts HTML document to PDF)</li>
              <li>Jenkins</li>
            </ul>
          </div>
        </AccordianItemWithIcon>

        <AccordianItemWithIcon value="libraries" title="Libraries">
          <div className="px-6 pt-2">
            <ul>
              <li>React Query</li>
              <li>Zod</li>
              <li>ShadCN</li>
              <li>Tailwind</li>
              <li>Prisma</li>
              <li>Mongoose</li>
              <li>D3</li>
              <li>Redux/Redux Toolkit</li>
              <li>RxJS</li>
              <li>jQuery</li>
              <li>NextAuth (Auth.js)</li>
              <li>Turf (Javascript geospatial library)</li>
              <li>Faker</li>
              <li>Bootstrap</li>
              <li>Materialize</li>
            </ul>
          </div>
        </AccordianItemWithIcon>

        <AccordianItemWithIcon value="apis" title="Third-Party APIs">
          <div className="px-6 pt-2">
            <ul>
              <li>Facebook Marketing API</li>
              <li>Google Maps API</li>
              <li>Google People API</li>
              <li>Exchange Web Services (EWS)</li>
              <li>Braintree Payment API</li>
            </ul>
          </div>
        </AccordianItemWithIcon>

        <AccordianItemWithIcon value="apps" title="Apps">
          <div className="px-6 pt-2">
            <ul>
              <li>Github</li>
              <li>Datadog</li>
              <li>BuildKite</li>
              <li>Kibana</li>
              <li>Figma</li>
              <li>Vercel</li>
              <li>Zendesk</li>
              <li>Jira</li>
            </ul>
          </div>
        </AccordianItemWithIcon>
      </Accordion>
    </AnimatedSection>
  );
}
