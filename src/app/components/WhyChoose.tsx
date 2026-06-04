import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  CheckCircle2,
  Target,
  Users,
  TrendingUp,
  Globe2,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Practical First",
    description:
      "Focus on real-world skills that you can apply immediately in your career.",
  },
  {
    icon: CheckCircle2,
    title: "Real Skills",
    description:
      "Industry-relevant training that prepares you for actual workplace challenges.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description:
      "Learn from experienced professionals who guide you every step of the way.",
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Structured pathways designed to accelerate your professional growth.",
  },
  {
    icon: Globe2,
    title: "Global Learning Opportunities",
    description:
      "Access to international standards and global best practices in education.",
  },
  {
    icon: Rocket,
    title: "Growing Educational Ecosystem",
    description:
      "Be part of an expanding network of learners and opportunities.",
  },
];

export function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
            Why Choose JB Academy
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're committed to delivering education that makes a real difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FFD700]/50 transition-all duration-500 h-full"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFD700]/0 via-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/10 group-hover:via-[#FFD700]/5 group-hover:to-transparent transition-all duration-500"></div>

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-[#FFD700] flex items-center justify-center mb-6"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-black" size={32} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Indicator */}
                    <motion.div
                      className="mt-4 w-12 h-1 bg-[#FFD700] rounded-full"
                      initial={{ width: 0 }}
                      whileHover={{ width: 48 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
