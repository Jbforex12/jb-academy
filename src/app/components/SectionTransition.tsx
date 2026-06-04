import { motion } from "motion/react";

type SectionTransitionProps = {
  /** CSS color at the top of the band (should match the section above). */
  from: string;
  /** CSS color at the bottom of the band (should match the section below). */
  to: string;
};

const sparks = [
  { left: "12%", size: 3, delay: 0, duration: 4 },
  { left: "28%", size: 2, delay: 1.2, duration: 5 },
  { left: "44%", size: 4, delay: 0.6, duration: 4.5 },
  { left: "61%", size: 2, delay: 1.8, duration: 5.5 },
  { left: "76%", size: 3, delay: 0.3, duration: 4.2 },
  { left: "89%", size: 2, delay: 2.1, duration: 5 },
];

/**
 * Animated gradient band that blends two adjacent sections (so there's no hard
 * seam) while adding an on-brand "cool" effect: drifting gold aurora glows, a
 * glowing divider line with a traveling shimmer, and floating sparks.
 */
export function SectionTransition({ from, to }: SectionTransitionProps) {
  return (
    <div
      aria-hidden
      className="relative h-20 sm:h-28 lg:h-32 w-full overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      {/* Drifting aurora glows */}
      <motion.div
        className="absolute -top-1/2 left-[12%] h-[200%] w-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,215,0,0.22), rgba(255,215,0,0) 70%)",
          filter: "blur(42px)",
        }}
        animate={{ x: ["-25%", "25%", "-25%"], opacity: [0.45, 0.9, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -top-1/2 right-[12%] h-[200%] w-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,165,0,0.18), rgba(255,165,0,0) 70%)",
          filter: "blur(42px)",
        }}
        animate={{ x: ["25%", "-25%", "25%"], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing divider line with a traveling shimmer */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
        <div
          className="relative mx-auto h-px w-2/3 max-w-3xl"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.55), transparent)",
          }}
        >
          <motion.div
            className="absolute top-1/2 h-1 w-24 -translate-y-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FFD700, transparent)",
              boxShadow: "0 0 14px 3px rgba(255,215,0,0.55)",
            }}
            initial={{ left: "-15%", opacity: 0 }}
            animate={{ left: ["-15%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Floating sparks */}
      {sparks.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full bg-[#FFD700]"
          style={{ left: s.left, width: s.size, height: s.size }}
          animate={{
            y: ["10%", "-180%"],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
