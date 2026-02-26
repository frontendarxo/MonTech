import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/hero";
import { TrustSection } from "@/components/sections/trust";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { ProjectsSection } from "@/components/sections/projects";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
