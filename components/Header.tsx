"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Navigation } from "@/components/Navigation";
import { ThemeSwitch } from "./ThemeSwitch";
import { AnimatedFadeInDiv } from "@/components/AnimatedFadeInDiv";
import { AdamGriffinLogo } from "@/components/AdamGriffinLogo";

export function Header() {
  return (
    <header className="py-12">
      <div className="text-center md:text-left">
        <AnimatedFadeInDiv>
          <AdamGriffinLogo className="md:w-xl mb-2" />
        </AnimatedFadeInDiv>
        <TextEffect
          preset="fade"
          per="char"
          className="text-3xl text-zinc-400 dark:text-zinc-400"
          delay={0.4}
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
