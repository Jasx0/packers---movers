import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Truck, Menu, X, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../constants";
import { cn } from "../lib/utils";

import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Quote", path: "/quote" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#F39C12]",
                  location.pathname === link.path ? "text-[#F39C12]" : "text-[#0A3D62]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-[#0A3D62] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#F39C12] transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0A3D62] hover:text-[#F39C12] transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path ? "text-[#F39C12] bg-orange-50" : "text-[#0A3D62] hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-[#0A3D62] text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#F39C12] transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
