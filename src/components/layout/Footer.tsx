import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">NELWAN SARL</h3>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Votre partenaire de confiance pour tous vos projets de construction, 
              architecture et travaux publics à Kinshasa.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-secondary-foreground hover:text-primary"
                onClick={() => window.open("https://www.facebook.com/profile.php?id=100063941894659", "_blank")}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nos Services</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Construction</a></li>
              <li><a href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Architecture</a></li>
              <li><a href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Travaux Publics</a></li>
              <li><a href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Design Intérieur & Extérieur</a></li>
              <li><a href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Modélisation 3D</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">1em rue industrielle en diagonale de station sonahydro, Kinshasa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">+(243) 819919338</p>
                  <p className="text-secondary-foreground/80">+(243) 895411181</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-secondary-foreground/80">contact@smartbuilderrdc.cd</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-secondary-foreground/80">Lun-Ven: 8h-17h, Sam: 8h-12h</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">À propos</a></li>
              <li><a href="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">Nos projets</a></li>
              <li><a href="/#testimonials" className="text-secondary-foreground/80 hover:text-primary transition-colors">Témoignages</a></li>
              <li><a href="/#faq" className="text-secondary-foreground/80 hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm">© 2025 NELWAN SARL. Tous droits réservés.</p>
            <p className="text-secondary-foreground/60 text-sm mt-4 md:mt-0">
              Développé avec ❤️ pour l'excellence
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;