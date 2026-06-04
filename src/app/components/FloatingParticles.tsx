import { motion } from "motion/react";

export function FloatingParticles() {
  const particles = Array.from({ length: 15 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700] rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 100 + window.innerHeight,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
