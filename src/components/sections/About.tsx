import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import handshake from "@/assets/handshake.jpg";

const About = () => {
  const aboutRef = useScrollReveal();

  const achievements = [
    {
      icon: Users,
      number: 50,
      suffix: "+",
      label: "Professionnels qualifiés",
      description: "Une équipe d'experts dédiée à l'excellence"
    },
    {
      icon: Award,
      number: 150,
      suffix: "+",
      label: "Projets réalisés",
      description: "Des réalisations qui marquent le paysage urbain"
    },
    {
      icon: Clock,
      number: 10,
      suffix: "+",
      label: "Années d'expérience",
      description: "Une expertise reconnue dans le secteur"
    }
  ];

  const values = [
    "Excellence dans la qualité de construction",
    "Respect des délais et du budget",
    "Innovation et technologies modernes",
    "Service client personnalisé",
    "Développement durable et écologique",
    "Transparence et intégrité"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={aboutRef} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                NELWAN SARL - Leader de la Construction à Kinshasa
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Depuis plus de 10 ans, NELWAN SARL s'impose comme entreprise leader 
                dans le secteur du BTP à Kinshasa et dans toute la République Démocratique du Congo. 
                Spécialiste en construction, architecture et travaux publics.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Notre entreprise a été fondée avec une vision claire : offrir des services de construction 
                de qualité supérieure tout en respectant les délais, les budgets et les standards 
                internationaux. Nous combinons l'expertise locale avec les meilleures pratiques 
                internationales pour créer des projets exceptionnels.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Que ce soit pour la construction de votre maison de rêve, d'un complexe commercial 
                ou d'infrastructures publiques, notre équipe de professionnels qualifiés vous 
                accompagne à chaque étape de votre projet.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Nos Valeurs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="construction" size="lg" className="w-full sm:w-auto" asChild>
              <a href="/about">
                Découvrir notre histoire
              </a>
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={handshake}
                alt="Partenariat professionnel NELWAN SARL"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Achievement Cards */}
              <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-3 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                     <Card key={index} className="bg-card/90 backdrop-blur-sm border-0 shadow-lg">
                      <CardContent className="p-4 text-center">
                        <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">
                          <AnimatedCounter 
                            end={achievement.number} 
                            suffix={achievement.suffix} 
                            duration={2000 + index * 200} 
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 gradient-secondary rounded-2xl blur-2xl opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-primary rounded-full blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;