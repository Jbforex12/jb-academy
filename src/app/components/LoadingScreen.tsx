import { motion } from "motion/react";
import mark from "../../assets/jb-mark-trimmed.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const particles = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 2,
    duration: 2.5 + Math.random() * 2.5,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.6 }}
      onAnimationComplete={onComplete}
    >
      {/* Radial backdrop glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,215,0,0.12), transparent 60%)",
        }}
      />

      {/* Floating gold particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FFD700]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -40, -80], scale: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="relative text-center">
        <motion.div
          className="relative inline-block"
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pulsing gold glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#FFD700]"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.25, 0.9] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(45px)", zIndex: -1 }}
          />

          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Rotating gradient ring */}
            <motion.div
              className="absolute -inset-[3px] rounded-[1.1rem]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #FFD700, #FFA500, transparent 60%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Logo panel */}
            <div className="relative bg-white rounded-2xl px-6 py-5 shadow-2xl overflow-hidden">
              <img
                src={mark}
                alt="JB Academy"
                className="w-36 max-w-[55vw] h-auto object-contain select-none"
              />

              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 -skew-x-12"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent)",
                }}
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-7 mx-auto h-1 w-32 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#FFA500] to-[#FFD700]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>

        {/* Tagline with animated dots */}
        <motion.div
          className="mt-4 flex items-center justify-center gap-1 text-gray-300 text-xs tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span>work smart</span>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="inline-block w-1 h-1 rounded-full bg-[#FFD700]"
              animate={{ opacity: [0.2, 1, 0.2], y: [0, -2, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
