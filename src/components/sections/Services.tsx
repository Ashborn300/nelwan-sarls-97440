import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Ruler, MapPin, Palette, Box, ArrowRight } from "lucide-react";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import constructionSite from "@/assets/construction-site.jpg";
import architectWork from "@/assets/architect-work.jpg";
import buildingConstruction from "@/assets/building-construction.jpg";
import houseModel from "@/assets/house-model.jpg";
import floorCleaning from "@/assets/floor-cleaning.jpg";

const Services = () => {
  const servicesRef = useScrollReveal();
  const cardsRef = useScrollRevealMultiple();

  const services = [
    {
      icon: Building,
      title: "Construction",
      description: "Construction de bâtiments résidentiels, commerciaux et industriels avec les standards les plus élevés.",
      image: constructionSite,
      features: ["Maisons individuelles", "Immeubles", "Centres commerciaux", "Usines"],
      link: "/services/construction"
    },
    {
      icon: Ruler,
      title: "Architecture",
      description: "Conception architecturale innovante et fonctionnelle adaptée à vos besoins et votre budget.",
      image: architectWork,
      features: ["Plans architecturaux", "Études de faisabilité", "Permis de construire", "Supervision"],
      link: "/services/architecture"
    },
    {
      icon: MapPin,
      title: "Travaux Publics",
      description: "Réalisation d'infrastructures publiques et privées pour le développement urbain.",
      image: buildingConstruction,
      features: ["Routes et voiries", "Ponts", "Canalisations", "Aménagement urbain"],
      link: "/services/travaux-publics"
    },
    {
      icon: Palette,
      title: "Design Intérieur & Extérieur",
      description: "Création d'espaces esthétiques et fonctionnels qui reflètent votre personnalité.",
      image: floorCleaning,
      features: ["Décoration intérieure", "Aménagement paysager", "Rénovation", "Mobilier sur mesure"],
      link: "/services/design"
    },
    {
      icon: Box,
      title: "Modélisation 3D",
      description: "Visualisation réaliste de vos projets avant construction grâce à nos technologies avancées.",
      image: houseModel,
      features: ["Plans 3D", "Rendus photoréalistes", "Visites virtuelles", "Animations"],
      link: "/services/modelisation"
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={servicesRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de services pour réaliser tous vos projets de construction 
            et d'aménagement avec expertise et professionnalisme.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover-lift bg-card border-0 shadow-lg overflow-hidden scroll-reveal-item"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={service.link}>
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="construction" size="xl" asChild>
            <a href="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;