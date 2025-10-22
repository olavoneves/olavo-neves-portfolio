import { Button } from "@/components/ui/button";
import { Download, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Create download link for CV
    const link = document.createElement('a');
    link.href = '/FULLSTACK-v2 (5).pdf';
    link.download = 'Olavo_Neves_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511955502307?text=Olá%20Olavo,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20site.', '_blank');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[image:var(--gradient-overlay)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Olá, eu sou Olavo Neves 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Desenvolvedor Full Stack | Crio soluções digitais que transformam ideias em resultados reais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={handleDownloadCV}
              className="min-w-[200px]"
            >
              <Download className="mr-2" />
              Baixar Currículo
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleWhatsApp}
              className="min-w-[200px] border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <MessageCircle className="mr-2" />
              Fazer Orçamento
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;