import type { Variants, Transition } from "motion/react";

export const menuSpring: Transition = { type: "spring", stiffness: 260, damping: 28 };
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
export const staggerChildren: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
