import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { Card, CardContent } from "@/components/ui/card";
import SocialCTA from "@/components/sections/SocialCTA";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Infrastructure Moderne",
      category: "Bâtiment Commercial",
      image: "/src/assets/construction-delivered.jpg",
      description: "Projet de construction d'infrastructure moderne à Kinshasa"
    },
    {
      title: "Résidence Premium",
      category: "Résidentiel",
      image: "/src/assets/house-model.jpg",
      description: "Construction de résidences haut de gamme"
    },
    {
      title: "Centre Commercial",
      category: "Commercial",
      image: "/src/assets/construction-site.jpg",
      description: "Développement d'un centre commercial moderne"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos projets de construction réalisés avec excellence et professionnalisme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-primary font-semibold">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <SocialCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;
