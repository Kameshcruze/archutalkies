import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import FeaturedVideos from "@/components/sections/FeaturedVideos";
import Collaborations from "@/components/sections/Collaborations";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ReelsShowcase />
      <FeaturedVideos />
      <Collaborations />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}
