import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Card } from "./ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1758519289200-384c7ef2d163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFsZSUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc4MDU0NTQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "JB Academy's digital skills program transformed my career. The practical approach and expert mentorship gave me the confidence to transition into tech.",
  },
  {
    name: "Chioma Okonkwo",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzgwNTQ1NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "The business training and consultancy services helped me launch my startup with confidence. The support has been invaluable.",
  },
  {
    name: "Emmanuel Okoro",
    role: "International Student",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3ODA1NDU0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Pathway Prep made my relocation smooth and stress-free. The workplace readiness training was exactly what I needed.",
  },
  {
    name: "Sarah Williams",
    role: "Digital Marketer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBlbnRyZXByZW5ldXJ8ZW58MXx8fHwxNzgwNTQ1NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "The hands-on learning experience at JB Academy gave me real skills that I use every day in my career. Highly recommend!",
  },
  {
    name: "Tunde Adeyemi",
    role: "Business Analyst",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZW50b3JzaGlwJTIwYnVzaW5lc3MlMjBjb2FjaGluZ3xlbnwxfHx8fDE3ODA1NDU0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Professional development at its finest. The mentors here truly care about your success and go above and beyond.",
  },
  {
    name: "Ngozi Eze",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbHMlMjB0cmFpbmluZyUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3ODA1NDU0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote:
      "Best investment in my career. The practical skills and networking opportunities opened doors I never thought possible.",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const getCardWidth = () => {
    const gapSize = 24; // gap-6 = 24px
    return `calc(${100 / itemsPerPage}% - ${((itemsPerPage - 1) * gapSize) / itemsPerPage}px)`;
  };

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
            Success Stories
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from learners who transformed their careers with JB Academy
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: getCardWidth() }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 h-full hover:border-[#FFD700]/50 transition-all duration-300">
                    {/* Quote Icon */}
                    <Quote className="text-[#FFD700] mb-6" size={40} />

                    {/* Quote Text */}
                    <p className="text-gray-300 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD700]"
                      />
                      <div>
                        <h4 className="text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="text-white" />
            </motion.button>

            <motion.button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="text-white" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#FFD700] w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
