"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Stats", href: "#stats" },
  { name: "Reels", href: "#reels" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check active section
      const sections = navItems.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-2xl font-bold tracking-widest text-white hover-target cursor-pointer">
            ARCHANA<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover-target relative cursor-pointer",
                  activeSection === item.href.substring(1) ? "text-white" : "text-secondaryText hover:text-white"
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  />
                )}
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white hover-target cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-6 right-6 text-white hover-target cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "text-3xl font-bold hover-target transition-colors cursor-pointer",
                  activeSection === item.href.substring(1) ? "text-transparent text-gradient" : "text-white/70 hover:text-white"
                )}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
