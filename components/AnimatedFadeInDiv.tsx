"use client";

import { motion } from "motion/react";

export type AnimatedFadeInDivProps = React.ComponentProps<typeof motion.div>;

export function AnimatedFadeInDiv({
  children,
  ...props
}: AnimatedFadeInDivProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, filter: "blur(4px)" },
        visible: { opacity: 1, filter: "blur(0px)" }
      }}
      transition={{ duration: 0.5 }}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
}
