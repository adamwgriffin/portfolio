"use client";

import { motion, type Variants } from "motion/react";

const variantsContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export type AnimatedMainProps = React.ComponentProps<typeof motion.main>;

export function AnimatedMain({ children, ...props }: AnimatedMainProps) {
  return (
    <motion.main
      variants={variantsContainer}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.main>
  );
}
