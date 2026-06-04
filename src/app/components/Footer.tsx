import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { XIcon } from "./icons/XIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "Pathway Prep", href: "#" },
      { name: "DigiSkilUp", href: "#" },
      { name: "JB Academy", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Mission", href: "#" },
      { name: "Careers", href: "#" },
    ],
    resources: [
      { name: "Success Stories", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  };

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: XIcon, href: "#", label: "X" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black border-t border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Logo size="large" />
            </motion.div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming lives through practical education, mentorship, and
              professional development. Building the future of learning, one
              student at a time.
            </p>

            <div className="flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors">
              <Mail size={18} />
              <a href="mailto:info@jbacademyltd.org" className="text-sm">
                info@jbacademyltd.org
              </a>
            </div>
          </div>

          {/* Link columns: 3-up on mobile to match the desktop layout */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:col-span-3">
          {/* Programs */}
          <div>
            <h4 className="text-white mb-4 border-b border-[#FFD700]/20 pb-2">
              Programs
            </h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4 border-b border-[#FFD700]/20 pb-2">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white mb-4 border-b border-[#FFD700]/20 pb-2">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-[#FFD700]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className="text-gray-400 group-hover:text-black transition-colors"
                    size={18}
                  />
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">
                © {currentYear} JB Academy Ltd. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Empowering learners worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-8">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
