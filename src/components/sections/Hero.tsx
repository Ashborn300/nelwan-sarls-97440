import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import betcOffice from "@/assets/betc-office.jpg";
import constructionDelivered from "@/assets/construction-delivered.jpg";

const Hero = () => {
  const heroRef = useScrollReveal();

  return (
    <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={heroRef} className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">NELWAN SARL</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Votre partenaire de confiance pour tous vos projets de construction, 
                architecture et travaux publics à Kinshasa. Excellence, innovation et qualité depuis plus de 10 ans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="/contact">
                  Obtenir un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="group" asChild>
                <a href="/projects">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Voir nos réalisations
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={150} suffix="+" duration={2500} />
                </div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={10} suffix="+" duration={2000} />
                </div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={98} suffix="%" duration={2200} />
                </div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10 animate-fade-up">
              <img
                src={constructionDelivered}
                alt="Chantier de construction NELWAN SARL"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-2xl hover-lift"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border animate-slide-right">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Projet livré</p>
                    <p className="text-sm text-muted-foreground">Infrastructure Moderne</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 gradient-secondary rounded-2xl blur-xl opacity-60 animate-bounce-soft"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 gradient-primary rounded-full blur-2xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;