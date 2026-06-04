import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Card } from "./ui/card";
import { Plane, Laptop, GraduationCap } from "lucide-react";
import pathwayPrepLogo from "../../assets/pathway-prep.png";
import digiSkilUpLogo from "../../assets/digiskilup.png";
import jbAcademyLogo from "../../assets/jb-academy.png";

const programs = [
  {
    title: "Pathway Prep",
    icon: Plane,
    image: pathwayPrepLogo,
    imageBg: "#ffffff",
    description:
      "Pre-departure training designed to help individuals build workplace readiness, confidence, and practical skills before relocating internationally.",
    color: "#FFD700",
  },
  {
    title: "DigiSkilUp",
    icon: Laptop,
    image: digiSkilUpLogo,
    imageBg: "#ffffff",
    description:
      "Digital skills empowerment platform providing training, conferences, and community support for success in the digital economy.",
    color: "#FFD700",
  },
  {
    title: "JB Academy",
    icon: GraduationCap,
    image: jbAcademyLogo,
    imageBg: "#000000",
    description:
      "Vocational training, mentorship, and educational consultancy focused on practical and usable skills.",
    color: "#FFD700",
  },
];

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-black">
            Our Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning solutions designed for the modern world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  {/* Logo */}
                  <div
                    className="relative h-64 overflow-hidden flex items-center justify-center p-8"
                    style={{ backgroundColor: program.imageBg }}
                  >
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="max-w-full max-h-full object-contain"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Icon Badge */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center shadow-md"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-black" size={24} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl text-black mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
