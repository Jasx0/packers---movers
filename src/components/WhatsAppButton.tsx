import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={BUSINESS_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle size={32} />
      <span className="sr-only">WhatsApp Us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
