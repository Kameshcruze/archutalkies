"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart } from "lucide-react";
import { useState } from "react";

const REELS = [
  { id: 1, views: "5.2M", likes: "313K", caption: "90'kids nah yaru theriyuma?", height: "h-80", link: "https://www.instagram.com/reel/DaRhu75ztnQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", image: "/reel1.jpg" },
  { id: 2, views: "2.6M", likes: "104K", caption: "Kandipa idha padinga vazhka fulla use aagum", height: "h-96", link: "https://www.instagram.com/reel/DXYkE0aE3ke/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", image: "/reel2.png" },
  { id: 3, views: "6L", likes: "36K", caption: "love marriage vs arranged marriage", height: "h-72", link: "https://youtube.com/shorts/qowm7DUNIqw?si=K1Bfxav2-jqNElKX", image: "/reel3.png" },
  { id: 4, views: "4.2M", likes: "27K", caption: "1997-2001 relatable?", height: "h-[28rem]", link: "https://www.instagram.com/reel/DaMZTz-x6J5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", image: "/reel4.png" },
  { id: 5, views: "86K", likes: "4.5K", caption: "Pen kulanthaingalai petra ammakaluku matumae theriyum avargal devathaigal endru", height: "h-80", image: "/reel5.png" },
  { id: 6, views: "80K", likes: "10K", caption: "What bro??🤗🧐❌Why bro 😌😪", height: "h-96", image: "/reel6.png" },
];

export default function ReelsShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <section id="reels" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest <span className="text-transparent text-gradient">Reels</span></h2>
          <p className="text-secondaryText text-lg max-w-2xl mx-auto">Explore my most loved short-form content. From relatable comedy to aesthetic vlogs.</p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {REELS.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative break-inside-avoid w-full ${reel.height} rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 border border-white/10 hover:-translate-y-2 transition-transform duration-500`}
              onClick={() => {
                if (reel.link) {
                  window.open(reel.link, "_blank", "noopener,noreferrer");
                } else {
                  setSelectedVideo(reel.id);
                }
              }}
            >
              {reel.image && (
                <img src={reel.image} alt={reel.caption} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white"
                >
                  <Play fill="white" size={24} />
                </motion.div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium mb-3 line-clamp-2">{reel.caption}</p>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1"><Play size={14} /> {reel.views}</span>
                  <span className="flex items-center gap-1"><Heart size={14} /> {reel.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center"
            >
              <p className="text-secondaryText">Video Player Integration</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
