import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker",
    "PostgreSQL", "MongoDB", "GraphQL", "Next.js", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack developer with over 5 years of experience 
                building scalable web applications and leading development teams. 
                I specialize in modern JavaScript frameworks and cloud technologies.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or mentoring aspiring developers.
                I believe in writing clean, maintainable code and creating user 
                experiences that make a difference.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Currently focused on building innovative solutions that solve 
                real-world problems and drive business growth.
              </p>
            </div>
            
            <Card className="bg-gradient-card border-border/50 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="hover:bg-primary/20 transition-colors duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;