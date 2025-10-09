import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import Contact from "@/components/sections/Contact";
import SocialCTA from "@/components/sections/SocialCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        <Contact />
        <SocialCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
