"use client";
import { motion } from "framer-motion";
import { Star, TrendingUp, Zap, Target, Users, Camera } from "lucide-react";

const SERVICES = [
  { icon: <TrendingUp size={24} />, title: "High Engagement", desc: "My audience is highly active, guaranteeing better reach for your brand." },
  { icon: <Users size={24} />, title: "Authentic Audience", desc: "Real followers who trust my recommendations and lifestyle choices." },
  { icon: <Zap size={24} />, title: "Fast Delivery", desc: "Professional and timely execution of all campaigns." },
  { icon: <Target size={24} />, title: "Creative Concepts", desc: "Unique storytelling tailored specifically to match your brand's voice." },
  { icon: <Star size={24} />, title: "Professional Communication", desc: "Smooth collaboration from initial pitch to final analytics." },
  { icon: <Camera size={24} />, title: "Organic Reach", desc: "Optimized content strategies that perform well in algorithms naturally." },
];

export default function Collaborations() {
  return (
    <section id="collaborations" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Work <span className="text-transparent text-gradient">With Me</span></h2>
            <p className="text-secondaryText text-lg max-w-2xl mx-auto">Partner with me to create authentic, engaging, and high-performing content for your brand.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondaryText leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
