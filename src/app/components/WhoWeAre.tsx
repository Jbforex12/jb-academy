import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#FFD700]/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="text-[#FFD700]" size={20} />
              <span className="text-sm text-black">About JB Academy</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-black">
              Education Isn't One Thing
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              JB Academy Ltd is a growing education company offering mentorship,
              vocational training, educational consultancy, digital skills
              development, and future-focused learning opportunities.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in practical, real-world education that empowers
              individuals to thrive in today's global economy. Our programs are
              designed to bridge the gap between learning and doing, providing
              students with the tools they need to succeed.
            </p>

            {/* Floating Decoration */}
            <motion.div
              className="mt-8 grid grid-cols-3 gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="p-4 sm:p-6 bg-black rounded-2xl border border-[#FFD700]/20">
                <div className="text-2xl sm:text-3xl text-[#FFD700] mb-2">3+</div>
                <div className="text-sm text-gray-300">Programs</div>
              </div>
              <div className="p-4 sm:p-6 bg-black rounded-2xl border border-[#FFD700]/20">
                <div className="text-2xl sm:text-3xl text-[#FFD700] mb-2">100%</div>
                <div className="text-sm text-gray-300">Practical</div>
              </div>
              <div className="p-4 sm:p-6 bg-black rounded-2xl border border-[#FFD700]/20">
                <div className="text-xl sm:text-3xl text-[#FFD700] mb-2">Global</div>
                <div className="text-sm text-gray-300">Reach</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
