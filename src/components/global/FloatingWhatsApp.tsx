"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phoneNumber = "919345663318"; 
  const text = encodeURIComponent("Hi Archana!");

  return (
    <motion.a
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      href={`https://wa.me/${phoneNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 md:right-10 z-50 flex flex-col items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-xl shadow-lg shadow-black/50 transition-all hover:scale-105 hover-target cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex flex-col items-center gap-2">
        <FaWhatsapp size={28} />
        <span className="text-[10px] font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">WhatsApp</span>
      </div>
    </motion.a>
  );
}
