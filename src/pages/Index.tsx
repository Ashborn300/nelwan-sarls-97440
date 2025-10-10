import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import TrustSection from "@/components/sections/TrustSection";
import Projects from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import SocialCTA from "@/components/sections/SocialCTA";
import CEOSection from "@/components/sections/CEOSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Vision />
        <Team />
        <TrustSection />
        <CEOSection />
        <Testimonials />
        <Projects />
        <FAQ />
        <Contact />
        <SocialCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
