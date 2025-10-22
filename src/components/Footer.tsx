import { Github, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/olavoneves"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/olavoneves"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@olavoneves"
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Olavo Neves</h3>
            <p className="text-muted-foreground">
              Desenvolvedor Full Stack criando soluções digitais inovadoras
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col space-y-2">
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection('home')}
              >
                Início
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection('about')}
              >
                Sobre
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection('projects')}
              >
                Projetos
              </Button>
              <Button
                variant="link"
                className="justify-start p-0 h-auto text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection('contact')}
              >
                Contato
              </Button>
            </nav>
          </div>
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Redes Sociais</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(social.url, '_blank')}
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Olavo Neves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;