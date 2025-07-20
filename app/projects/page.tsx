import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects"
};

export type Project = {
  title: string;
  year: number;
  description: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "Mithril AI",
    year: 2024,
    description: "Open science AI resarch lab",
    url: "https://github.com/mithrilai"
  },
  {
    title: "OpenDeepLearning",
    year: 2023,
    description: "Open source AI education resources",
    url: "https://opendeeplearning.xyz/"
  }
];

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity
              duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="w-full flex flex-col sm:flex-row justify-between
                items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2"
            >
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
