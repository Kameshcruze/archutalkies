"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with animated gradient and particles */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full">
        {/* Profile Image with animated rings */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-primary to-accent mb-8"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-[-10px] rounded-full border border-white/20 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute inset-[-20px] rounded-full border border-primary/30"
          />
          
          <div className="w-full h-full rounded-full bg-background overflow-hidden relative border-4 border-background">
            <div className="absolute inset-0 bg-white/5"></div>
            {/* Real image would go here. Using a gradient placeholder with icon for now */}
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
              <span className="text-6xl font-light text-white/50">A</span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          I am <span className="text-transparent text-gradient">Archana</span>
        </motion.h1>

        {/* Typing Subtitle */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl font-medium text-secondaryText mb-12 h-12"
        >
          <Typewriter
            options={{
              strings: [
                "Digital Creator",
                "Influencer",
                "Lifestyle Creator",
                "Nature Lover",
                "Tamil Creator",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16"
        >
          <a href="#portfolio" className="hover-target group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(108,59,255,0.6)] cursor-pointer">
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a href="#contact" className="hover-target px-8 py-4 glass text-white rounded-full font-semibold transition-all hover:bg-white/10 hover:scale-105 cursor-pointer">
            Let's Collaborate
          </a>

          <a href="#" className="hover-target p-4 glass text-white rounded-full hover:bg-white/10 hover:scale-110 transition-all cursor-pointer">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover-target p-4 glass text-white rounded-full hover:bg-white/10 hover:scale-110 transition-all cursor-pointer">
            <FaYoutube size={20} />
          </a>
        </motion.div>

        {/* Quick Stats Line */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <CountUp end={54} duration={3} suffix="K+" />
            </div>
            <div className="text-sm text-secondaryText uppercase tracking-wider font-medium">Followers</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <CountUp end={167} duration={3} suffix="+" />
            </div>
            <div className="text-sm text-secondaryText uppercase tracking-wider font-medium">Posts</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <CountUp end={1} duration={3} suffix="M+" />
            </div>
            <div className="text-sm text-secondaryText uppercase tracking-wider font-medium">Views</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              <CountUp end={50} duration={3} suffix="+" />
            </div>
            <div className="text-sm text-secondaryText uppercase tracking-wider font-medium">Brands</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
