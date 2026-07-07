"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phoneNumber = "919345663318"; 
  const text = encodeURIComponent("Hi Archana!");

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      href={`https://wa.me/${phoneNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] transition-transform hover:scale-110 hover-target cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8" />
    </motion.a>
  );
}
