import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const timeline = [
  {
    title: "Education Consultancy",
    description: "Personalized guidance for academic and career pathways",
    status: "active",
    year: "Current",
  },
  {
    title: "Digital Skills Development",
    description: "Comprehensive tech training and digital literacy programs",
    status: "active",
    year: "Current",
  },
  {
    title: "International Preparation Programs",
    description: "Pre-departure and workplace readiness training",
    status: "active",
    year: "Current",
  },
  {
    title: "Future Learning Ventures",
    description: "Expanding into new educational technologies and methodologies",
    status: "upcoming",
    year: "Coming Soon",
  },
];

export function FutureVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-black">
            Built To Grow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our roadmap for transforming education and empowering learners
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFD700]/50 to-gray-300"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative pl-24"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-4 top-1 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                  style={{
                    backgroundColor:
                      item.status === "active" ? "#FFD700" : "#e5e7eb",
                  }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                >
                  {item.status === "active" ? (
                    <CheckCircle2 className="text-black" size={16} />
                  ) : (
                    <Circle className="text-gray-400" size={16} />
                  )}
                </motion.div>

                {/* Year Badge */}
                <motion.div
                  className="absolute left-14 top-0 text-xs px-3 py-1 rounded-full bg-black text-[#FFD700] border border-[#FFD700]/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                >
                  {item.year}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="mt-8 p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>

                  {/* Progress Indicator */}
                  {item.status === "active" && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#FFD700]"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: "100%" } : {}}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        />
                      </div>
                      <span className="text-xs text-[#FFD700]">Live</span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
