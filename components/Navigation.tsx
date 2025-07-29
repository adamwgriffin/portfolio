"use client";

import { navItems } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
            duration-300 not-aria-[current=page]:hover:text-zinc-400
            aria-[current=page]:text-purple-500
            dark:aria-[current=page]:text-purple-400
            aria-[current=page]:font-semibold text-xl"
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
