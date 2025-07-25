"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "About Me" },
  "/experience": { name: "Experience" },
  "/projects": { name: "Projects" },
  "/stack": { name: "Tech Stack" }
};

export function Navigation() {
  const currentPathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-4">
      {Object.entries(navItems).map(([path, { name }]) => (
        <Link
          key={path}
          href={path}
          aria-current={path === currentPathname ? "page" : false}
          className="flex align-middle relative whitespace-nowrap transition-all
            duration-350 not-aria-[current=page]:hover:text-violet-400/100
            dark:not-aria-[current=page]:hover:text-violet-300/100
            aria-[current=page]:text-purple-500
            dark:aria-[current=page]:text-violet-300
            aria-[current=page]:font-bold"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
