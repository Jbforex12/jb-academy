import { motion } from "motion/react";

type SectionTransitionProps = {
  /** CSS color at the top of the band (should match the section above). */
  from: string;
  /** CSS color at the bottom of the band (should match the section below). */
  to: string;
};

/**
 * Thin blend between sections with a single animated gold line (traveling shimmer).
 */
export function SectionTransition({ from, to }: SectionTransitionProps) {
  return (
    <div
      aria-hidden
      className="relative h-10 sm:h-12 w-full overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
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
    </div>
  );
}
