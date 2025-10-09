import { Users, Award, Shield, Target } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Professionnels qualifiés"
    },
    {
      icon: Award,
      value: "15+",
      label: "Années d'expérience"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Sécurité garantie"
    },
    {
      icon: Target,
      value: "200+",
      label: "Projets réussis"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Notre Équipe de Professionnels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des experts qualifiés et dévoués, prêts à réaliser vos projets avec excellence et professionnalisme
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={teamPhoto}
              alt="Équipe professionnelle de NELWAN SARL sur un chantier de construction"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Une équipe unie pour votre réussite
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Chez NELWAN SARL, notre force réside dans notre équipe de professionnels hautement qualifiés. 
              Chaque membre apporte son expertise unique pour garantir la qualité et la sécurité de vos projets.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Formés aux dernières techniques de construction et équipés d'outils modernes, nos équipes 
              travaillent avec rigueur et passion pour transformer vos visions en réalité.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">Certifiés et assurés</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Target className="h-6 w-6" />
                <span className="font-semibold">Formation continue</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
