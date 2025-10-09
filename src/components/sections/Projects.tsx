import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";

const Projects = () => {
  const projects = [
    { id: 1, image: project1, alt: "Projet de construction - Ferraillage de dalle" },
    { id: 2, image: project2, alt: "Projet de construction - Terrain de sport" },
    { id: 3, image: project3, alt: "Projet de construction - Pavillon" },
    { id: 4, image: project4, alt: "Projet de construction - Bâtiment résidentiel" },
    { id: 5, image: project5, alt: "Projet de construction - Immeuble" },
    { id: 6, image: project6, alt: "Projet de construction - Structure en acier" },
    { id: 7, image: project7, alt: "Projet de construction - Fondations" },
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
      </div>
    </section>
  );
};

export default Projects;
