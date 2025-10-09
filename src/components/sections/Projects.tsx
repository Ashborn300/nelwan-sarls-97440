import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
import project11 from "@/assets/project-new-11.jpg";
import project12 from "@/assets/project-new-12.jpg";
import project13 from "@/assets/project-new-13.jpg";
import project14 from "@/assets/project-new-14.jpg";
import project15 from "@/assets/project-new-15.jpg";
import project16 from "@/assets/project-new-16.jpg";
import project17 from "@/assets/project-new-17.jpg";
import project18 from "@/assets/project-new-18.jpg";
import project19 from "@/assets/project-new-19.jpg";
import project20 from "@/assets/project-new-20.jpg";

const Projects = () => {
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
    { id: 11, image: project11, alt: "Projet de construction" },
    { id: 12, image: project12, alt: "Projet de construction" },
    { id: 13, image: project13, alt: "Projet de construction" },
    { id: 14, image: project14, alt: "Projet de construction" },
    { id: 15, image: project15, alt: "Projet de construction" },
    { id: 16, image: project16, alt: "Projet de construction" },
    { id: 17, image: project17, alt: "Projet de construction" },
    { id: 18, image: project18, alt: "Projet de construction" },
    { id: 19, image: project19, alt: "Projet de construction" },
    { id: 20, image: project20, alt: "Projet de construction" },
  ];

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nos Réalisations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets achevés et en cours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button size="lg" className="text-lg px-8 py-6">
              Voir plus de nos réalisations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
