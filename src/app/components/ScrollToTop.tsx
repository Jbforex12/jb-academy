import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#FFD700] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#FFD700]/50 transition-all duration-300 group"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="text-black group-hover:animate-bounce" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
