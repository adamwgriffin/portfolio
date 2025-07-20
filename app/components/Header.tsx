import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" }
};

export function Header() {
  return (
    <header
      className="flex flex-col md:flex-row md:items-center justify-between py-12
        md:pb-6"
    >
      <div className="flex items-center">
        <Link href="/">
          <div className="text-4xl font-semibold">Adam Griffin</div>
          <div className="text-2xl text-zinc-600 dark:text-zinc-500">
            Software Engineer
          </div>
        </Link>
      </div>
      <nav className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="transition-all hover:text-neutral-500
              dark:hover:text-neutral-200 flex align-middle relative"
          >
            {name}
          </Link>
        ))}
        <ThemeSwitch />
      </nav>
    </header>
  );
}
