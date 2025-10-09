import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollReveal, useScrollRevealMultiple } from "@/hooks/useScrollReveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const Testimonials = () => {
  const testimonialsRef = useScrollReveal();
  const cardsRef = useScrollRevealMultiple();

  const testimonials = [
    {
      name: "Marie Kabila",
      role: "Propriétaire",
      project: "Villa Moderne - Gombe",
      rating: 5,
      comment: "NELWAN SARL a dépassé toutes nos attentes. La qualité de finition est exceptionnelle et le respect des délais parfait. Je recommande vivement leurs services.",
      avatar: "MK"
    },
    {
      name: "Jean-Baptiste Tshombe",
      role: "Directeur Commercial",
      project: "Centre Commercial Kinshasa",
      rating: 5,
      comment: "Un travail professionnel remarquable. L'équipe a su comprendre nos besoins et livrer un projet conforme à nos attentes. Excellent suivi de chantier.",
      avatar: "JT"
    },
    {
      name: "Sarah Mukendi",
      role: "Architecte",
      project: "Résidence Familiale",
      rating: 5,
      comment: "La collaboration avec NELWAN SARL fut excellente. Leur expertise technique et leur écoute ont permis de concrétiser parfaitement nos plans architecturaux.",
      avatar: "SM"
    },
    {
      name: "André Kasongo",
      role: "Entrepreneur",
      project: "Complexe Industriel",
      rating: 5,
      comment: "NELWAN SARL allie professionnalisme et innovation. Leur approche moderne de la construction nous a permis d'optimiser nos investissements.",
      avatar: "AK"
    },
    {
      name: "Célestine Mbuyi",
      role: "Particulier",
      project: "Rénovation Maison",
      rating: 5,
      comment: "Service client exceptionnel et travaux de qualité. L'équipe a transformé notre ancienne maison en un véritable bijou architectural.",
      avatar: "CM"
    },
    {
      name: "Patrick Nyembo",
      role: "Promoteur Immobilier",
      project: "Résidence Haut Standing",
      rating: 5,
      comment: "Partenaire de confiance pour tous nos projets. La qualité de leurs réalisations et leur respect des engagements font de NELWAN SARL un choix évident.",
      avatar: "PN"
    },
    {
      name: "Grace Mbombo",
      role: "Médecin",
      project: "Clinique Privée",
      rating: 5,
      comment: "Construction d'une clinique moderne avec toutes les normes respectées. NELWAN SARL a su adapter le projet aux exigences médicales spécifiques.",
      avatar: "GM"
    },
    {
      name: "Robert Kimbembe",
      role: "Ingénieur",
      project: "Infrastructure Routière",
      rating: 5,
      comment: "Expertise technique impressionnante en travaux publics. L'équipe maîtrise parfaitement les défis des infrastructures urbaines de Kinshasa.",
      avatar: "RK"
    },
    {
      name: "Aminata Diallo",
      role: "Commerçante",
      project: "Boutique Moderne",
      rating: 5,
      comment: "Aménagement intérieur créatif et fonctionnel. NELWAN SARL a su créer un espace commercial attractif qui a boosté notre chiffre d'affaires.",
      avatar: "AD"
    },
    {
      name: "David Mulumba",
      role: "Directeur d'École",
      project: "École Primaire",
      rating: 5,
      comment: "Construction d'une école moderne et sécurisée. L'attention portée aux détails et la qualité des matériaux utilisés sont remarquables.",
      avatar: "DM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div ref={testimonialsRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Avis de nos <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos clients pensent de nos services et réalisations. 
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-card border-0 shadow-lg relative overflow-hidden scroll-reveal-item"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {/* Project */}
                <div className="text-sm text-primary font-medium">
                  Projet: {testimonial.project}
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              <AnimatedCounter end={98} suffix="%" duration={2000} />
            </div>
            <div className="text-muted-foreground">Clients satisfaits</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              <AnimatedCounter end={4.9} decimals={1} suffix="/5" duration={2200} />
            </div>
            <div className="text-muted-foreground">Note moyenne</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              <AnimatedCounter end={150} suffix="+" duration={2400} />
            </div>
            <div className="text-muted-foreground">Avis positifs</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">
              <AnimatedCounter end={95} suffix="%" duration={2600} />
            </div>
            <div className="text-muted-foreground">Recommandations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;