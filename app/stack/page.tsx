import { AnimatedSection } from "@/components/AnimatedSection";
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

      <div className="md:columns-2">
        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Languages</h1>
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

        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Frameworks</h1>
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

        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Data</h1>
          <ul>
            <li>PostgreSQL/PostGIS</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>

        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Tools</h1>
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

        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Libraries</h1>
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

        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Third-Party APIs</h1>
          <ul>
            <li>Facebook Marketing API</li>
            <li>Google Maps API</li>
            <li>Google People API</li>
            <li>Exchange Web Services (EWS)</li>
            <li>Braintree Payment API</li>
          </ul>
        </div>

        <div className="pb-6">
          <h1 className="font-medium text-2xl mb-4">Apps</h1>
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
      </div>
    </AnimatedSection>
  );
}
