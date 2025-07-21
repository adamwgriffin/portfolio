import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";

const navItems = {
  "/": { name: "Home" },
  "/experience": { name: "Experience" },
  "/projects": { name: "Projects" },
  "/contact": { name: "Contact" }
};

export function Header() {
  return (
    <header className="pt-12 pb-6">
      <div className="text-center md:text-left">
        <Link href="/">
          <div
            className="text-4xl font-semibold transition-all
              hover:text-neutral-600"
          >
            Adam Griffin
          </div>
          <div
            className="text-2xl text-zinc-600 dark:text-zinc-500
              hover:text-zinc-500"
          >
            Software Engineer
          </div>
        </Link>
        <div
          className="flex flex-col items-center md:flex-row md:justify-between
            pt-4 gap-4"
        >
          <nav className="flex gap-4">
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
          </nav>
          <div className="h-7">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
