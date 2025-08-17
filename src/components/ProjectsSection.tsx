import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Virtual Gesture Interface (VGI)",
      description: "VGI is a real-time gesture control system that lets users interact with digital environments without touch..",
      technologies: ["Python", "computer vision", "Mediapipe", " Pyautogui","Math"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "Water Quality Prediction",
      description: "A machine learning model that predicts water quality by analyzing key parameters, helping classify sources and support real-time environmental monitoring.",
      technologies: ["Python", "Pandas", "NumPY", "Scikit", "Random Forest"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: true
    },
    {
      title: "Movie Searching App",
      description: "Built a React movie search app using the OMDB API with real-time results, detailed info, Favorites list, responsive UI, and robust error handling.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js "],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "WaterWizard IoTap",
      description: "Constructed WaterWizard IoTap, an IoT-based smart water tap system that optimizes usage and minimizes waste using sensors and microcontroller logic.",
      technologies: ["Arduino IDE", "C/C++", "Arduino Uno ", "Infrared Sensor"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    },
    {
      title: "Optical character Recognition",
      description: "Deployed an OCR system to extract text from images and documents, enabling fast digitization, improved accessibility, and editable text conversion.",
      technologies: ["Python ", "Pytesseract", "Streamlit", "PIL"],
      github: "https://github.com",
      live: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="ml-2">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
