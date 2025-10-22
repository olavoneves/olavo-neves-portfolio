import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import genesisMockup from "@/assets/genesis-mockup.jpg";
import heraMockup from "@/assets/hera-mockup.jpg";
import biogurtMockup from "@/assets/biogurt-mockup.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Genesis Contábil",
      description: "Portais específicos para melhorar a performance de controle do fluxo das entregas das Folhas de Pagamento aos clientes da empresa. Desenvolvido em Java com Spring Boot, React e Next.",
      image: genesisMockup,
      link: "https://github.com/olavoneves/genesis-contabil",
      isExternal: false,
    },
    {
      name: "Hera Corporation - API",
      description: "API para melhorar controle de funcionamento da própria Plataforma da Hera. Desenvolvido em Java com Quarkus.",
      image: heraMockup,
      link: "https://github.com/olavoneves/hera-api_v1",
      isExternal: false,
    },
    {
      name: "BioGurt",
      description: "Aplicação full stack com backend em Spring Boot e frontend responsivo, com envio de e-mails e integração com banco PostgreSQL. Criada para gestão de cadastros e orçamentos automatizados.",
      image: biogurtMockup,
      link: "https://biogurt.vercel.app/",
      isExternal: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Alguns dos meus principais projetos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções Full Stack desenvolvidas com as mais modernas tecnologias
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-card"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    {project.isExternal ? (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </>
                    ) : (
                      <>
                        <Github className="mr-2 h-4 w-4" />
                        Ver no GitHub
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center pt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/olavoneves?tab=repositories', '_blank')}
            >
              <Github className="mr-2" />
              Ver mais projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;