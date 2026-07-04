"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, src: "Image 1", height: "h-64" },
  { id: 2, src: "Image 2", height: "h-96" },
  { id: 3, src: "Image 3", height: "h-80" },
  { id: 4, src: "Image 4", height: "h-72" },
  { id: 5, src: "Image 5", height: "h-96" },
  { id: 6, src: "Image 6", height: "h-64" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Photo <span className="text-transparent text-gradient">Gallery</span></h2>
          <p className="text-secondaryText text-lg max-w-2xl mx-auto">A glimpse into my life, travels, and beautiful moments.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative break-inside-avoid w-full ${img.height} rounded-2xl overflow-hidden group cursor-pointer bg-white/5 border border-white/10`}
              onClick={() => setSelectedImage(img.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white/30 font-light">{img.src}</div>
              
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white"
                >
                  <ZoomIn size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh] bg-zinc-900 rounded-2xl overflow-hidden flex items-center justify-center border border-white/10"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10 cursor-pointer"
              >
                <X size={20} />
              </button>
              <div className="text-white/50 text-2xl font-light">Full Size Image Placeholder</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
