"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type MetricCounterProps = {
  target: number;
  suffix?: string;
  decimals?: number;
  delay?: number;
};

export function MetricCounter({
  target,
  suffix = "",
  decimals = 0,
  delay = 0,
}: MetricCounterProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const controls = animate(0, target, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setValue,
    });

    return () => controls.stop();
  }, [delay, isInView, reduceMotion, target]);

  const displayedValue = isInView && reduceMotion ? target : value;

  return (
    <strong ref={ref} aria-label={`${target.toFixed(decimals)}${suffix}`}>
      {displayedValue.toFixed(decimals)}
      {suffix}
    </strong>
  );
}
