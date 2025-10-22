import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Send, Mail, Github, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511955502307?text=Olá%20Olavo,%20vi%20seu%20portfólio%20e%20quero%20conversar!', '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    // Encode data for WhatsApp
    const message = `*Nova mensagem do portfólio*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/5511955502307?text=${encodedMessage}`, '_blank');
    
    toast.success("Redirecionando para o WhatsApp...");
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/olavoneves",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/olavoneves",
      color: "hover:text-primary"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@olavoneves",
      color: "hover:text-destructive"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Vamos conversar?
            </h2>
            <p className="text-muted-foreground text-lg">
              Entre em contato para orçamentos, parcerias ou oportunidades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Enviar Mensagem
                </CardTitle>
                <CardDescription>
                  Preencha o formulário e entrarei em contato via WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-me sobre seu projeto..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Quick Contact */}
            <div className="space-y-6">
              <Card className="shadow-[var(--shadow-card)] bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Direto
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Prefere conversar agora? Clique no botão abaixo!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleWhatsApp}
                    variant="outline"
                    size="lg"
                    className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
              
              {/* Social Links */}
              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                  <CardDescription>
                    Conecte-se comigo nas redes sociais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 justify-center">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <Button
                          key={social.name}
                          variant="ghost"
                          size="lg"
                          onClick={() => window.open(social.url, '_blank')}
                          className={`${social.color} transition-colors`}
                        >
                          <Icon className="h-6 w-6" />
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;