'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2,
  suffix = '+',
  prefix = ''
}: { 
  from?: number; 
  to: number; 
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from.toString());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration });
      return () => controls.stop();
    }
  }, [count, to, duration, isInView]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest.toLocaleString());
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
}
