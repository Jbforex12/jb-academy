import { motion } from "motion/react";

type SectionTransitionProps = {
  /** CSS color at the top of the band (should match the section above). */
  from: string;
  /** CSS color at the bottom of the band (should match the section below). */
  to: string;
  /** Softer hero → light section handoff (navy fade + gold divider). */
  variant?: "default" | "hero-light";
};

/**
 * Blends adjacent sections. Use `hero-light` between the dark hero and About.
 */
export function SectionTransition({
  from,
  to,
  variant = "default",
}: SectionTransitionProps) {
  if (variant === "hero-light") {
    return (
      <div
        aria-hidden
        className="relative h-14 sm:h-20 w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #1e293b 0%, #334155 20%, #94a3b8 48%, #e2e8f0 72%, #ffffff 100%)",
        }}
      >
        <div className="absolute top-[42%] left-0 right-0">
          <div
            className="mx-auto h-px w-4/5 max-w-2xl"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,215,0,0.75), transparent)",
            }}
          />
        </div>
      </div>
    );
  }

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
