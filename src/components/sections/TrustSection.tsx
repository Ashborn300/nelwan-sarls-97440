import { Shield, Award, Users, CheckCircle2 } from "lucide-react";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import nelwanTeamSite from "@/assets/nelwan-team-site.jpg";

const TrustSection = () => {
  const titleRef = useScrollReveal();
  const featuresRef = useScrollRevealMultiple();

  const features = [
    {
      icon: Shield,
      title: "Sécurité Garantie",
      description: "Normes de sécurité strictes sur tous nos chantiers"
    },
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Plus de 15 ans d'expérience dans la construction"
    },
    {
      icon: Users,
      title: "Équipe Qualifiée",
      description: "Professionnels certifiés et formés en continu"
    },
    {
      icon: CheckCircle2,
      title: "Suivi Rigoureux",
      description: "Contrôle qualité à chaque étape du projet"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Votre projet de construction en <span className="text-gradient">bonnes mains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe dévouée et expérimentée pour concrétiser vos ambitions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img 
              src={nelwanTeamSite} 
              alt="Équipe NELWAN SARL sur chantier examinant les plans de construction"
              className="w-full h-[500px] object-cover hover-scale"
            />
            <div className="absolute inset-0 gradient-primary opacity-10"></div>
          </div>

          {/* Features Grid */}
          <div ref={featuresRef} className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-muted/30 rounded-xl hover-lift scroll-reveal-item"
              >
                <div className="flex-shrink-0 w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
