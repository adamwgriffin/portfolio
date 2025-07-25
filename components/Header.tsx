"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Navigation } from "@/components/Navigation";
import { ThemeSwitch } from "./ThemeSwitch";
import { AnimatedFadeInDiv } from "@/components/AnimatedFadeInDiv";

export function Header() {
  return (
    <header className="py-12">
      <div className="text-center md:text-left">
        <TextEffect
          per="char"
          className="text-6xl font-semibold bg-gradient-to-r from-violet-400
            to-pink-200 to-50% bg-clip-text text-transparent"
        >
          Adam Griffin
        </TextEffect>
        <TextEffect
          preset="fade"
          per="char"
          className="text-2xl text-zinc-400 dark:text-zinc-400"
          delay={0.8}
        >
          Software Engineer
        </TextEffect>
        <AnimatedFadeInDiv
          className="flex flex-col items-center md:flex-row md:justify-between
            pt-8 gap-4"
        >
          <Navigation />
          <div className="h-7">
            <ThemeSwitch />
          </div>
        </AnimatedFadeInDiv>
      </div>
    </header>
  );
}
