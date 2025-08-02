import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            Full Stack Developer
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            V S Manikanta Vasireddy
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies and innovative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-glow px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:manikanta@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default HeroSection;