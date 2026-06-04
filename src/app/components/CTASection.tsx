import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section
      ref={ref}
      className="py-20 sm:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1639503667014-6533f3f34831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNlbGVicmF0aW5nJTIwc3VjY2VzcyUyMGdyYWR1YXRpb258ZW58MXx8fHwxNzgwNTQ1NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Students celebrating"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90"></div>
      </div>

      {/* Floating Gold Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#FFD700] rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -50, -100],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 rounded-full"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 215, 0, 0.1)",
                "0 0 40px rgba(255, 215, 0, 0.2)",
                "0 0 20px rgba(255, 215, 0, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-[#FFD700]" size={20} />
            <span className="text-sm text-[#FFD700]">Join Us Today</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white">
            Start Your Learning
            <br />
            <span className="text-[#FFD700]">Journey Today</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Take the first step towards transforming your career and achieving
            your goals. Join thousands of learners who trust JB Academy for
            their professional development.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 px-10 py-7 text-lg shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300"
            >
              Explore Programs
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
              <span className="text-sm">Trusted by Professionals</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
              <span className="text-sm">Global Recognition</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
              <span className="text-sm">100% Practical Learning</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
