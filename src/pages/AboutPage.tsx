import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import SocialCTA from "@/components/sections/SocialCTA";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <About />
        <Vision />
        <SocialCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
