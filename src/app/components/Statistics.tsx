import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  {
    value: 3,
    suffix: "+",
    label: "Education Programs",
    description: "Comprehensive learning pathways",
  },
  {
    value: 100,
    suffix: "%",
    label: "Practical Learning Approach",
    description: "Real-world application focused",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Global Learner Community",
    description: "Students worldwide",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Continuous Program Expansion",
    description: "Always growing",
  },
];

export function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FFD700 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-black">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 border border-[#FFD700]/20 shadow-xl"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <motion.div
                    className="text-4xl sm:text-5xl lg:text-6xl text-[#FFD700] mb-2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {isInView && (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    )}
                  </motion.div>

                  <h3 className="text-lg text-white mb-2">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
