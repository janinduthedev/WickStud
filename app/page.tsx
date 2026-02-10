import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <ProjectSlider />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}