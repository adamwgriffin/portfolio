import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedProseSection } from "@/components/AnimatedProseSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Adam Griffin's Projects"
};

export default function Projects() {
  return (
    <AnimatedProseSection>
      <h1 className="text-2xl">The &quot;Awsom&quot; Project</h1>
      <p>
        For the past few years I&apos;ve been working on a real estate search
        app called{" "}
        <a href="https://awsom.homes/" target="_blank">
          &quot;Awsom&quot;
        </a>
        . It&apos;s not meant as a serious endeavor, more of a learning tool. I
        wanted to use it as a means to get better with Next.js, Typescript and
        Node, as well as a host of other things. I chose a real estate search
        app for the project mostly because it was something I was already
        familiar with from my work experience. I also wanted to understand how I
        could improve upon the kind of app I had worked on previously. I&apos;m
        hosting the app on Vercel. The database is hosted on MongoDB Atlas, and
        I&apos;m using ImageKit to host my images.
      </p>

      <figure>
        <Image
          src="/awsom-site.jpg"
          alt="The Awsom website"
          width={989}
          height={595}
          priority
          className="rounded-md border border-gray-100 shadow-lg"
        />
        <figcaption>The awsome.homes website.</figcaption>
      </figure>

      <p>
        Right now the app only includes fake listing data for Seattle
        neighborhoods. Generating this fake data was actually a whole learning
        experience in and of itself. I was able to get some Seattle neighborhood
        boundary data for free through the city&apos;s website and use it to
        take advantage of MongoDBs built-in geospatial search capabilities.
        However, the experience with Mongo as a geospatial database wasn&apos;t
        as seamless as one would like. I ended up having to supplement some
        functionality with Turf.js (which is a great library). Otherwise, it
        worked well enough for a rapid development paradigm.
      </p>

      <p>
        Iterating through continuous improvement has actually been a theme of
        this project. I originally started out with an{" "}
        <a href="https://github.com/adamwgriffin/vue-search" target="_blank">
          app written in Vue
        </a>{" "}
        that was much closer to the app I worked on professionally. After that,
        I pivoted to something more challenging:{" "}
        <a href="https://github.com/adamwgriffin/search" target="_blank">
          rewriting everything in Next.js with Typescript
        </a>
        . That version is they one that is currently being used for the
        awsom.homes site.
      </p>

      <p>
        I&apos;ve recently began a{" "}
        <a href="https://github.com/adamwgriffin/search-II" target="_blank">
          third iteration
        </a>
        . This latest version is no longer a monolith. I have a{" "}
        <a
          href="https://github.com/adamwgriffin/listing_service"
          target="_blank"
        >
          separate real estate listing search service
        </a>{" "}
        written in Koa. For the frontend, I chose a simpler approach, using
        Tailwind with Shadcn for components, rather than writing everything from
        scratch, as I had previously done.
      </p>

      <p>
        Recently, I&apos;ve decided to try going back to using Postgres with
        PostGIS, which is what I had used for work. I{" "}
        <a href="https://github.com/adamwgriffin/listing-service-postgis-db">
          put together most of the necessary database tables and queries
        </a>{" "}
        needed for a listing service. I started work on yet another listing
        service, this time written in Go that uses this PostGIS database, but
        progress has been slower on that front.
      </p>
    </AnimatedProseSection>
  );
}
