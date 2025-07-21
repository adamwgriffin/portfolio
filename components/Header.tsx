import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { Navigation } from "@/components/Navigation";
import { Suspense } from "react";

export async function Header() {
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
          <Suspense>
            <Navigation />
          </Suspense>
          <div className="h-7">
            <Suspense>
              <ThemeSwitch />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}
