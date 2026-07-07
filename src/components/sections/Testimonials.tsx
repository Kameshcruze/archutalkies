"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TESTIMONIALS = [
  { id: 1, name: "Anurah Clothings", avatar: "A", review: "Archana is incredible to work with. Her audience engagement is unmatched and the content quality exceeded our expectations." },
  { id: 2, name: "Nisha Beauty Parlour", avatar: "N", review: "One of the most professional creators we've partnered with. Fast delivery and high converting content." },
  { id: 3, name: "Udupi Cafe", avatar: "U", review: "Our foot traffic doubled after her reel went viral. Highly recommend her for local business promotions!" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client <span className="text-transparent text-gradient">Testimonials</span></h2>
          <p className="text-secondaryText text-lg">What brands say about working with me.</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={false}
              animate={{ 
                opacity: current === index ? 1 : 0, 
                scale: current === index ? 1 : 0.9,
                zIndex: current === index ? 10 : 0,
                pointerEvents: current === index ? "auto" : "none"
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-full glass p-8 md:p-12 rounded-3xl text-center shadow-xl shadow-black/20"
            >
              <Quote className="mx-auto text-primary/40 mb-6" size={48} />
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">"{testimonial.review}"</p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-secondaryText">Brand Partner</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12 relative z-20">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${current === index ? "bg-primary w-8" : "bg-white/20 w-2 hover:bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
