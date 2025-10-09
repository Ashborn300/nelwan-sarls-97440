import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import workerssite from "@/assets/workers-site.jpg";

const Vision = () => {
  const visionRef = useScrollReveal();
  const cardsRef = useScrollRevealMultiple();

  const visionCards = [
    {
      icon: Eye,
      title: "Notre Vision",
      content: "Devenir la référence incontournable du secteur de la construction en RDC, en alliant innovation, qualité et respect de l'environnement pour façonner l'avenir urbain du pays.",
      color: "gradient-primary"
    },
    {
      icon: Target,
      title: "Notre Mission",
      content: "Accompagner nos clients dans la réalisation de leurs projets les plus ambitieux en offrant des solutions de construction complètes, durables et adaptées aux réalités locales.",
      color: "gradient-secondary"
    },
    {
      icon: Heart,
      title: "Nos Valeurs",
      content: "L'intégrité, l'excellence, l'innovation et le respect mutuel guident chacune de nos actions pour créer des relations de confiance durables avec nos partenaires.",
      color: "gradient-primary"
    },
    {
      icon: Lightbulb,
      title: "Notre Engagement",
      content: "Nous nous engageons à utiliser les technologies les plus avancées et les pratiques les plus responsables pour construire un avenir meilleur pour les générations futures.",
      color: "gradient-secondary"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={workerssite}
          alt="Vision NELWAN SARL"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={visionRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Notre <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guidés par une vision ambitieuse et des valeurs fortes, nous œuvrons chaque jour 
            pour transformer le paysage urbain de Kinshasa et contribuer au développement du pays.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card 
                key={card.title}
                className="group hover-lift bg-card/80 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden scroll-reveal-item"
              >
                {/* Background Gradient - removed for better image visibility */}
                <div className={`absolute top-0 left-0 w-full h-1 ${card.color} group-hover:h-2 transition-all duration-500`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {card.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Rejoignez notre vision de l'excellence
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Ensemble, construisons l'avenir de Kinshasa avec des projets qui marquent 
            positivement le développement urbain et économique de notre ville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Commencer votre projet
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;