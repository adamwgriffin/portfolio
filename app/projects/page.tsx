import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Projects",
  description: "Adam Griffin's Projects"
};

export default function Projects() {
  return (
    <AnimatedSection className="prose">
      <article>
        <h1 className="text-2xl">The &quot;Awsom&quot; Project</h1>

        <p>
          For the past few years I&apos;ve been working on a real estate search
          app called{" "}
          <a href="https://awsom.homes/" target="_blank">
            &quot;Awsom&quot;
          </a>
          . The main goal of the project is to use it as a means to get better
          with Next.js, Typescript, Node and other libraries, as well as to
          demonstrate the kind of app I have experience working on. I&apos;m
          hosting the app on Vercel, the database is hosted on MongoDB Atlas and
          I&apos;m using ImageKit to host my images.
        </p>

        <figure>
          <Image
            src="/awsom-site.jpg"
            alt="The Awsom website"
            width={989}
            height={595}
            className="rounded-md border border-gray-100 shadow-lg"
            priority
          />
          <figcaption>The awsome.homes website.</figcaption>
        </figure>

        <p>
          Right now the app only includes fake listing data for Seattle
          neighborhoods. Generating this fake data was actually a whole learning
          experience in and of itself. I was able to get some Seattle
          neighborhood boundary data for free through the city&apos;s website
          and use it to take advantage of MongoDBs built-in geospatial search
          capabilities. However, the experience with Mongo as a geospatial
          database wasn&apos;t as seamless as one would like. I ended up having
          to supplement some functionality with Turf.js (which is a great
          library). Otherwise, it worked well enough for a rapid development
          paradigm.
        </p>

        <p>
          Iterating through continuous improvement has actually been a theme of
          this project. I originally started out with an{" "}
          <a href="https://github.com/adamwgriffin/vue-search" target="_blank">
            app written with Vue
          </a>{" "}
          that was much closer to the app I worked on professionally. After
          that, I pivoted to{" "}
          <a href="https://github.com/adamwgriffin/search" target="_blank">
            rewriting everything in Next.js with Typescript
          </a>
          . That version is the one that is currently being used for the
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
          that uses Koa. For the frontend, I chose a simpler approach, using
          Tailwind with Shadcn for components, rather than writing everything
          from scratch, as I had previously done.
        </p>

        <p>
          I&apos;ve also wanted to try going back to using Postgres with
          PostGIS, which is what I had used for work. I{" "}
          <a
            href="https://github.com/adamwgriffin/listing-service-postgis-db"
            target="_blank"
          >
            put together most of the necessary database tables and queries
          </a>{" "}
          needed for the listing service but haven&apos;t gotten around to
          rewiting the service with this yet.
        </p>
      </article>

      <article>
        <h1 className="text-2xl">Betterboxd</h1>

        <p>
          Lately I&apos;ve been working on a clone of{" "}
          <a href="https://letterboxd.com/" target="_blank">
            Letterboxd
          </a>{" "}
          called{" "}
          <a href="https://github.com/adamwgriffin/betterboxd" target="_blank">
            &quot;Betterboxd&quot;
          </a>
          . Betterboxd is written in Ruby on Rails 8. The main goal of the
          project is to test out building a full stack app the Rails way,
          without adding dependencies like React, etc. I was also interested in
          trying out the new authentication provided by the{" "}
          <a
            href="https://guides.rubyonrails.org/security.html#authentication"
            target="_blank"
          >
            Rails 8 authentication generator
          </a>
          .
        </p>

        <p>
          So far I&apos;ve been able to accomplish a lot by just using ERB
          templates with some Stimulus sprinkled in, but I really miss working
          with components. It&apos;s hard to go back to templates and partials
          after working in that pardigm. The authenticaion code generated by the
          new authentication generator is surpisingly useable, although I&apos;m
          not sure that I would trust it for a large scale application in
          production.
        </p>

        <figure>
          <Image
            src="/betterboxd-site.jpg"
            alt="The Betterboxd website"
            width={989}
            height={595}
            className="rounded-md border border-gray-100 shadow-lg"
          />
          <figcaption>
            The Betterboxd landing page when the user is logged out.
          </figcaption>
        </figure>
      </article>

      <article>
        <h1 className="text-2xl">This Website</h1>

        <p>
          It&apos;s not the largest project in the world but putting together
          this site has been a fun thing to work on. I&apos;ve learned more
          about how to optimize a site for SEO with Next.js. I&apos;ve also
          spent some time learning the Motion animation library as well as the
          Motion-Primitives UI kit.
        </p>
      </article>
    </AnimatedSection>
  );
}
