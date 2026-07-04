import { Mail } from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/5 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-widest text-white">
          ARCHANA<span className="text-primary">.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-secondaryText hover:text-white transition-colors hover-target cursor-pointer">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-secondaryText hover:text-white transition-colors hover-target cursor-pointer">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-secondaryText hover:text-white transition-colors hover-target cursor-pointer">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-secondaryText hover:text-white transition-colors hover-target cursor-pointer">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="text-secondaryText text-sm">
          &copy; {new Date().getFullYear()} Archana. Developed by <a href="https://elitewebdevelopers.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors hover-target">Elite</a>
        </div>
      </div>
    </footer>
  );
}
