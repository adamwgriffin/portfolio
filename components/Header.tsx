"use client";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Navigation } from "@/components/Navigation";
import { AnimatedFadeInDiv } from "@/components/AnimatedFadeInDiv";
import { AdamGriffinLogo } from "@/components/AdamGriffinLogo";

export function Header() {
  return (
    <header>
      <div className="text-center md:text-left">
        <AnimatedFadeInDiv>
          <AdamGriffinLogo className="mb-2 max-w-xl" />
        </AnimatedFadeInDiv>
        <TextEffect
          preset="fade"
          per="char"
          className="text-3xl sm:text-4xl text-zinc-400"
          delay={0.4}
        >
          Software Engineer
        </TextEffect>
        <AnimatedFadeInDiv
          className="flex flex-col items-center md:flex-row pt-8"
        >
          <Navigation />
        </AnimatedFadeInDiv>
      </div>
    </header>
  );
}
