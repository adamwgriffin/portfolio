"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "Home" },
  "/experience": { name: "Experience" },
  "/projects": { name: "Projects" },
  "/contact": { name: "Contact" }
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
          className="transition-all
            not-aria-[current=page]:hover:text-neutral-500
            dark:not-aria-[current=page]:hover:text-neutral-200 flex
            align-middle relative aria-[current=page]:text-purple-500
            dark:aria-[current=page]:text-fuchsia-300
            aria-[current=page]:font-bold whitespace-nowrap"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
