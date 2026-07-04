"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <span className="text-white/30 text-xl font-light tracking-widest uppercase">Portrait Image</span>
              </div>
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-12 glass p-6 rounded-2xl max-w-[200px] z-10 hidden sm:block"
            >
              <Heart className="text-accent mb-2" size={24} fill="#FF5FA2" />
              <p className="text-sm font-medium text-white">Connecting with people emotionally.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-primary text-sm font-medium">
              <Sparkles size={16} /> About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-transparent text-gradient">Archana.</span>
            </h2>
            
            <p className="text-lg text-secondaryText mb-6 leading-relaxed">
              I create engaging Tamil content around lifestyle, relatable moments, nature, and entertainment. My journey started with a simple passion for storytelling, and today, it has grown into a beautiful community.
            </p>
            
            <p className="text-lg text-secondaryText mb-8 leading-relaxed">
              My goal is to create content that connects with people emotionally while entertaining thousands of viewers every day. Whether it's a random thought, a beautiful sunset, or a relatable daily struggle, I love sharing it all with you.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">100K</div>
                <div className="text-sm text-secondaryText uppercase tracking-wider">Goal</div>
              </div>
              <div className="glass p-6 rounded-2xl">
                <div className="text-3xl font-bold text-white mb-1">Daily</div>
                <div className="text-sm text-secondaryText uppercase tracking-wider">Growing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
