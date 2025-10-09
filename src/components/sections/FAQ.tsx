import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const faqRef = useScrollReveal();

  const faqs = [
    {
      question: "Quels types de projets NELWAN SARL réalise-t-elle ?",
      answer: "Nous réalisons une large gamme de projets : construction de maisons individuelles, immeubles résidentiels et commerciaux, infrastructures publiques, travaux de rénovation, aménagement intérieur et extérieur, ainsi que la modélisation 3D. Notre expertise couvre tous les aspects du secteur BTP."
    },
    {
      question: "Combien de temps faut-il pour réaliser un projet de construction ?",
      answer: "La durée dépend de plusieurs facteurs : taille du projet, complexité, conditions météorologiques et disponibilité des matériaux. En moyenne, une maison individuelle prend 6-12 mois, un immeuble 12-24 mois. Nous établissons un planning détaillé lors de l'étude préliminaire."
    },
    {
      question: "Comment NELWAN SARL garantit-elle la qualité de ses constructions ?",
      answer: "Nous appliquons des standards de qualité stricts : utilisation de matériaux certifiés, contrôles qualité à chaque étape, supervision par des ingénieurs qualifiés, respect des normes de construction internationales, et garantie sur tous nos travaux. Notre équipe technique effectue des inspections régulières."
    },
    {
      question: "Proposez-vous un service de financement ou d'échelonnement des paiements ?",
      answer: "Oui, nous proposons des solutions de paiement flexibles adaptées à chaque projet. Nous travaillons avec des partenaires financiers locaux et proposons des échéanciers personnalisés. Le paiement s'effectue généralement par étapes selon l'avancement des travaux."
    },
    {
      question: "NELWAN SARL s'occupe-t-elle des démarches administratives ?",
      answer: "Absolument ! Nous vous accompagnons dans toutes les démarches : demande de permis de construire, études de sol, déclarations en mairie, conformité aux normes urbanistiques. Notre équipe administrative expérimentée gère ces procédures pour simplifier votre projet."
    },
    {
      question: "Quels sont les matériaux utilisés par NELWAN SARL ?",
      answer: "Nous utilisons uniquement des matériaux de qualité supérieure, certifiés et adaptés au climat tropical de Kinshasa. Ciment, fer à béton, briques, carrelage, peintures... Tous nos matériaux sont sourcés auprès de fournisseurs reconnus et testés selon les normes internationales."
    },
    {
      question: "Peut-on visiter des réalisations de NELWAN SARL ?",
      answer: "Oui, nous organisons régulièrement des visites de nos réalisations avec l'accord des propriétaires. C'est un excellent moyen de découvrir la qualité de notre travail et de vous inspirer pour votre projet. Contactez-nous pour programmer une visite."
    },
    {
      question: "NELWAN SARL propose-t-elle un service après-vente ?",
      answer: "Nous offrons un service après-vente complet avec une garantie sur tous nos travaux. Notre équipe reste disponible pour toute intervention, maintenance ou modification. Nous proposons également des contrats d'entretien pour les gros œuvres et installations."
    },
    {
      question: "Comment obtenir un devis pour mon projet ?",
      answer: "C'est simple ! Contactez-nous par téléphone, email ou WhatsApp. Nous organisons une visite gratuite de votre terrain ou site pour comprendre vos besoins. Nous vous remettons ensuite un devis détaillé sous 5-7 jours ouvrables, entièrement gratuit et sans engagement."
    },
    {
      question: "NELWAN SARL travaille-t-elle en dehors de Kinshasa ?",
      answer: "Oui, nous intervenons dans toute la République Démocratique du Congo. Bien que basés à Kinshasa, nous avons déjà réalisé des projets dans plusieurs provinces. Les modalités d'intervention sont adaptées selon la localisation du projet."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div ref={faqRef} className="text-center space-y-4 mb-16">
          <div className="flex justify-center">
            <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Questions <span className="text-gradient">Fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquemment posées sur nos services 
            et notre façon de travailler. Pour toute autre question, n'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border-0 shadow-sm hover:shadow-md transition-shadow px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-muted/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Notre équipe est là pour vous aider. Contactez-nous et nous répondrons rapidement à toutes vos interrogations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors font-medium"
            >
              Nous contacter
            </a>
            <a 
              href="tel:+243123456789" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;