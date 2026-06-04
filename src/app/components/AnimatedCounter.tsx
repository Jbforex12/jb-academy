import { motion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
}
