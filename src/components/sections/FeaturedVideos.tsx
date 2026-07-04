"use client";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  { id: 1, title: "A Day in my Life", views: "1.2M", duration: "10:24" },
  { id: 2, title: "Travel Vlog: Bali", views: "850K", duration: "15:10" },
  { id: 3, title: "Q&A Answering your questions", views: "500K", duration: "12:05" },
  { id: 4, title: "My Setup Tour", views: "200K", duration: "08:45" },
];

export default function FeaturedVideos() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-transparent text-gradient">Videos</span></h2>
            <p className="text-secondaryText text-lg">Long form content on YouTube.</p>
          </div>
          <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:text-white transition-colors">
            View All Videos
          </a>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[300px] md:min-w-[450px] snap-center group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-white/5 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white/30 font-light">Thumbnail Placeholder</div>
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white pl-1 shadow-lg shadow-primary/50">
                    <Play fill="white" size={24} />
                  </div>
                </div>
                
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-white">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{video.title}</h3>
              <p className="text-secondaryText text-sm mt-1">{video.views} views</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
