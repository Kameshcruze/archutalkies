"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work <span className="text-transparent text-gradient">Together</span></h2>
          <p className="text-secondaryText text-lg">Interested in a collaboration or promotion? Drop a message below.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80 ml-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <label className="text-sm font-medium text-white/80 ml-2">Phone (Optional)</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              placeholder="+91 945663318"
            />
          </div>

          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-white/80 ml-2">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your brand or project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity hover-target cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : (
              <>Send Message <Send size={20} /></>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
