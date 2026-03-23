import { Variants, type Transition } from 'framer-motion';

export const luxuryEase: number[] = [0.16, 1, 0.3, 1];
export const smoothEase: number[] = [0.4, 0, 0.2, 1];

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: luxuryEase,
};

/* ─── Stagger Container ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* ─── Fade Up Item ─── */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: luxuryEase },
  },
};

export const fadeUpItemSmall: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: luxuryEase },
  },
};

/* ─── Hero Stagger Variants ─── */
export const heroEyebrow: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0, duration: 0.9, ease: luxuryEase },
  },
};

export const heroH1: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15, duration: 0.9, ease: luxuryEase },
  },
};

export const heroSubhead: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.8, ease: luxuryEase },
  },
};

export const heroLocation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.45, duration: 0.7, ease: luxuryEase },
  },
};

export const heroCTAs: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.7, ease: luxuryEase },
  },
};

export const heroProof: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.75, duration: 0.6, ease: luxuryEase },
  },
};

/* ─── Page Transitions ─── */
export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: luxuryEase },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2 },
  },
};

/* ─── Service Card Hover ─── */
export const serviceCardImage: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.07,
    transition: { duration: 0.5, ease: luxuryEase },
  },
};

export const serviceCardOverlay: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 0.55,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

export const serviceCardCTA: Variants = {
  rest: { opacity: 0, y: 12 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: luxuryEase },
  },
};

/* ─── Sticky Booking Bar ─── */
export const stickyBarVariants: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: luxuryEase },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

/* ─── Booking Step Transitions ─── */
export const bookingStepEnter: Variants = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: luxuryEase },
  },
  exit: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.35, ease: luxuryEase },
  },
};

/* ─── Scale In ─── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: luxuryEase },
  },
};

/* ─── Section Reveal ─── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: luxuryEase },
  },
};

/* ─── Mega Menu ─── */
export const megaMenuVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15 },
  },
};

/* ─── Mobile Menu ─── */
export const mobileMenuOverlay: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const mobileMenuLink: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: luxuryEase,
    },
  }),
};
