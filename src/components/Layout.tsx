import { motion, useScroll } from "motion/react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      
      {/* Scroll to top progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F39C12] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Layout;
