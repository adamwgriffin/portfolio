import type { Metadata } from "next";
import { AnimatedProseSection } from "@/components/AnimatedProseSection";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Adam Griffin's Tech STack"
};

export default function Page() {
  return (
    <AnimatedProseSection>
      <p>
        Here are some of the various technologies that I&apos;ve had experience
        with over the years.
      </p>

      <div>
        <h2 className="mt-0">Languages</h2>
        <ul>
          <li>Typescript/Javascript</li>
          <li>Ruby</li>
          <li>SQL</li>
          <li>CSS</li>
        </ul>
      </div>

      <div>
        <h2 className="mt-0">Frameworks</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Angular</li>
          <li>Vue</li>
          <li>Ruby on Rails</li>
          <li>Rspec</li>
          <li>Koa</li>
          <li>Express</li>
          <li>Backbone</li>
        </ul>
      </div>

      <div>
        <h2 className="mt-0">Services and Tools</h2>
        <ul>
          <li>Docker/Docker Compose</li>
          <li>PostgreSQL/PostGIS</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>PDFreactor (service that converts HTML document to PDF)</li>
          <li>Jenkins (CI/CD platform)</li>
        </ul>
      </div>

      <div>
        <h2 className="mt-0">Libraries</h2>
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
          <li>Next Auth (Auth.js)</li>
          <li>Turf (Javascript geospatial library)</li>
          <li>Faker</li>
          <li>Sass</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>jQuery</li>
        </ul>
      </div>

      <div>
        <h2 className="mt-0">Third-Party APIs</h2>
        <ul>
          <li>Facebook Marketing API (for creating ads)</li>
          <li>Google Maps API</li>
          <li>Google People API</li>
          <li>Exchange Web Services (EWS)</li>
          <li>BrainTree payment service</li>
        </ul>
      </div>

      <div>
        <h2 className="mt-0">Apps</h2>
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
    </AnimatedProseSection>
  );
}
