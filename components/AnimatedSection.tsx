"use client";

import { motion } from "motion/react";

const variantsSection = {
  hidden: { opacity: 0, y: 4, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

const transitionSection = {
  duration: 0.3
};

export type AnimatedSectionProps = React.ComponentProps<typeof motion.section>;

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      variants={variantsSection}
      transition={transitionSection}
      {...props}
    >
      {children}
    </motion.section>
  );
}
