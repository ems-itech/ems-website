"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MotionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const viewport = { once: true, margin: "-80px" } as const;
const smooth = [0.22, 1, 0.36, 1] as const;

export function HeroEntrance({
  children,
  className,
  delay = 0,
  from = "left",
}: MotionProps & { from?: "left" | "right" | "up" }) {
  const reduceMotion = useReducedMotion();
  const offset = from === "left" ? { x: -64, y: 0 } : from === "right" ? { x: 64, y: 0 } : { x: 0, y: 36 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { ...offset, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.95, delay: reduceMotion ? 0 : delay, ease: smooth }}
    >
      {children}
    </motion.div>
  );
}

export function SectionSlide({
  children,
  className,
  delay = 0,
  from = "bottom",
}: MotionProps & { from?: "left" | "right" | "bottom" }) {
  const reduceMotion = useReducedMotion();
  const offset = from === "left" ? { x: -90, y: 0 } : from === "right" ? { x: 90, y: 0 } : { x: 0, y: 64 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : offset}
      whileInView={{ x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : delay, ease: smooth }}
    >
      {children}
    </motion.div>
  );
}

export function HeadingReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", y: 24 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
      viewport={viewport}
      transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : delay, ease: smooth }}
    >
      {children}
    </motion.div>
  );
}

export function ClipReveal({ children, className, delay = 0 }: MotionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0 round 24px)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0 round 24px)" }}
      viewport={viewport}
      transition={{ duration: reduceMotion ? 0 : 1.25, delay: reduceMotion ? 0 : delay, ease: smooth }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.16,
}: MotionProps & { stagger?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewport}
      variants={{ hidden: {}, visible: { transition: { delayChildren: delay, staggerChildren: reduceMotion ? 0 : stagger } } }}
    >
      {children}
    </motion.div>
  );
}

const cardVariants: Variants = {
  hidden: { y: 34, scale: 0.94, clipPath: "inset(0 0 100% 0 round 14px)" },
  visible: { y: 0, scale: 1, clipPath: "inset(0 0 0% 0 round 14px)", transition: { duration: 0.8, ease: smooth } },
};

export function StaggerCard({ children, className }: Omit<MotionProps, "delay">) {
  return <motion.div className={className} variants={cardVariants}>{children}</motion.div>;
}

const popVariants: Variants = {
  hidden: { scale: 0.6, rotate: -5 },
  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 105, damping: 15, mass: 0.95 } },
};

export function StaggerPop({ children, className }: Omit<MotionProps, "delay">) {
  return <motion.div className={className} variants={popVariants}>{children}</motion.div>;
}
