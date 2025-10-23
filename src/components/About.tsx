import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/Imagem do WhatsApp de 2025-06-02 à(s) 10.54.00_72cd0ac9.jpg";

const About = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <img
                src={profilePhoto}
                alt="Olavo Neves - Desenvolvedor Full Stack"
                className="relative rounded-3xl shadow-[var(--shadow-card)] w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Quem sou eu
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou um Desenvolvedor Full Stack apaixonado por tecnologia e inovação. 
                Tenho experiência com Java, Spring Boot, React, JavaScript e integração 
                entre front-end e back-end.
              </p>
              
              <p>
                Crio sistemas e sites de alta performance, sempre buscando unir estética 
                e funcionalidade para entregar resultados que agregam valor real aos negócios.
              </p>
              
              <p>
                Meu objetivo é transformar ideias em soluções digitais eficientes e escaláveis 
                — com código limpo, design moderno e foco total na experiência do usuário.
              </p>
            </div>
            
            <Button 
              variant="default" 
              size="lg" 
              onClick={scrollToProjects}
              className="group"
            >
              Ver Projetos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;