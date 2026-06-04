import { motion } from "motion/react";

type SectionTransitionProps = {
  /** CSS color at the top of the band (should match the section above). */
  from: string;
  /** CSS color at the bottom of the band (should match the section below). */
  to: string;
};

/**
 * Soft gradient band used to blend two adjacent sections so there is no hard
 * seam between a dark section and a light one. A faint gold glow fades in on
 * scroll to keep the transition on-brand.
 */
export function SectionTransition({ from, to }: SectionTransitionProps) {
  return (
    <div
      aria-hidden
      className="relative h-16 sm:h-24 lg:h-28 w-full overflow-hidden"
      style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-20 w-2/3 max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,215,0,0.16), rgba(255,215,0,0) 70%)",
          filter: "blur(28px)",
        }}
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
