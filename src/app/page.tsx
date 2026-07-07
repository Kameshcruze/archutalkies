import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import Collaborations from "@/components/sections/Collaborations";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ReelsShowcase />
      <Collaborations />
      <Testimonials />
      <Contact />
    </>
  );
}
