import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import nelsonWanga1 from "@/assets/nelson-wanga-1.jpg";
import nelsonWanga2 from "@/assets/nelson-wanga-2.jpg";
import nelsonWanga3 from "@/assets/nelson-wanga-3.jpg";

const CEOSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Directeur <span className="text-gradient">Général</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une vision d'excellence portée par l'expertise et la passion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Photos du DG */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src={nelsonWanga1}
                alt="Nelson Wanga - Directeur Général NELWAN"
                className="w-full h-[400px] object-cover rounded-lg shadow-construction hover-lift"
              />
            </div>
            <img
              src={nelsonWanga2}
              alt="Nelson Wanga sur chantier"
              className="w-full h-[250px] object-cover rounded-lg shadow-construction hover-lift"
            />
            <img
              src={nelsonWanga3}
              alt="Nelson Wanga - Ingénieur"
              className="w-full h-[250px] object-cover rounded-lg shadow-construction hover-lift"
            />
          </div>

          {/* Informations du DG */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Nelson Wanga
              </h3>
              <p className="text-xl text-primary font-semibold flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Ingénieur en Bâtiment et Travaux Publics
              </p>
            </div>

            <Card className="border-0 shadow-lg bg-muted/50">
              <CardContent className="p-6 space-y-4">
                <p className="text-foreground leading-relaxed">
                  À la tête de NELWAN Construction, Nelson Wanga combine expertise technique 
                  et vision stratégique pour garantir l'excellence de chaque projet. 
                  Diplômé en ingénierie du bâtiment et travaux publics, il met son savoir-faire 
                  au service de la réalisation de projets d'envergure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sa passion pour l'innovation et son engagement envers la qualité font de lui 
                  un leader reconnu dans le secteur de la construction en République Démocratique du Congo.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg hover-lift bg-card">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">Excellence</h4>
                  <p className="text-sm text-muted-foreground">
                    Engagement envers la qualité et l'innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover-lift bg-card">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <Briefcase className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">Expérience</h4>
                  <p className="text-sm text-muted-foreground">
                    Expertise reconnue dans le secteur
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
