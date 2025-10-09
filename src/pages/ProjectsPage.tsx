import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import { Card, CardContent } from "@/components/ui/card";
import SocialCTA from "@/components/sections/SocialCTA";

import project1 from "@/assets/project-new-1.jpg";
import project2 from "@/assets/project-new-2.jpg";
import project3 from "@/assets/project-new-3.jpg";
import project4 from "@/assets/project-new-4.jpg";
import project5 from "@/assets/project-new-5.jpg";
import project6 from "@/assets/project-new-6.jpg";
import project7 from "@/assets/project-new-7.jpg";
import project8 from "@/assets/project-new-8.jpg";
import project9 from "@/assets/project-new-9.jpg";
import project10 from "@/assets/project-new-10.jpg";

const ProjectsPage = () => {
  const projects = [
    { id: 1, image: project1, alt: "Projet de construction" },
    { id: 2, image: project2, alt: "Projet de construction" },
    { id: 3, image: project3, alt: "Projet de construction" },
    { id: 4, image: project4, alt: "Projet de construction" },
    { id: 5, image: project5, alt: "Projet de construction" },
    { id: 6, image: project6, alt: "Projet de construction" },
    { id: 7, image: project7, alt: "Projet de construction" },
    { id: 8, image: project8, alt: "Projet de construction" },
    { id: 9, image: project9, alt: "Projet de construction" },
    { id: 10, image: project10, alt: "Projet de construction" },
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
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
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
