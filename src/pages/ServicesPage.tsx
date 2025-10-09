import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import Services from "@/components/sections/Services";
import SocialCTA from "@/components/sections/SocialCTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Services />
        <SocialCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
