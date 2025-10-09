import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const contactRef = useScrollReveal();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: ["1em rue industrielle en diagonale de station sonahydro", "Kinshasa, République Démocratique du Congo"],
      action: "Voir sur Maps"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["+(243) 819919338", "+(243) 895411181"],
      action: "Appeler"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["Lun-Ven: 8h00 - 17h00", "Sam: 8h00 - 12h00", "Dim: Fermé"],
      action: "Planifier RDV"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div ref={contactRef} className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Contactez-<span className="text-gradient">nous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à démarrer votre projet ? Notre équipe d'experts est là pour vous accompagner 
            de la conception à la réalisation. Obtenez votre devis gratuit dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover-lift bg-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm mb-1">{detail}</p>
                        ))}
                        <Button variant="ghost" size="sm" className="mt-2 text-primary hover:text-primary-dark p-0">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency Contact */}
            <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Contact d'urgence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Pour les urgences techniques ou interventions d'urgence :
                </p>
                <Button variant="secondary" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  +(243) 819919338
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Contact CTA */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-12 text-center space-y-8">
                <div className="space-y-4">
                  <div className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-xl animate-bounce-soft">
                    <Phone className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl text-foreground">
                    Contactez-nous sur WhatsApp
                  </CardTitle>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Obtenez une réponse rapide à vos questions et recevez votre devis personnalisé directement sur WhatsApp.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    variant="default" 
                    size="xl"
                    className="w-full max-w-md mx-auto bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6"
                    onClick={() => {
                      const phoneNumber = "+243819929338";
                      const message = "Bonjour! Je souhaite obtenir des informations sur vos services de construction.";
                      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Discuter sur WhatsApp
                  </Button>

                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+(243) 819919338</span>
                    </div>
                    <div className="hidden md:block">•</div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+(243) 895411181</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">⚡</div>
                    <h4 className="font-semibold text-foreground">Réponse rapide</h4>
                    <p className="text-sm text-muted-foreground">Nous répondons en moins de 30 minutes</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl">💬</div>
                    <h4 className="font-semibold text-foreground">Conseil personnalisé</h4>
                    <p className="text-sm text-muted-foreground">Un expert à votre écoute</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl">📋</div>
                    <h4 className="font-semibold text-foreground">Devis gratuit</h4>
                    <p className="text-sm text-muted-foreground">Sans engagement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;