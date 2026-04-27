import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const CallButton = () => {
  return (
    <motion.a
      href={`tel:${BUSINESS_INFO.phone}`}
      className="fixed bottom-6 right-6 z-40 bg-[#0A3D62] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <Phone size={32} />
      <span className="sr-only">Call Us</span>
    </motion.a>
  );
};

export default CallButton;
