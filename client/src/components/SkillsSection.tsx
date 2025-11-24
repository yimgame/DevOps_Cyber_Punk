import SkillBar from "./SkillBar";
import { Shield, Server, Code2, Lock, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Shield,
    title: "Security & Penetration Testing",
    color: "primary" as const,
    skills: [
      { name: "Web Application Security", level: 95 },
      { name: "Network Penetration Testing", level: 92 },
      { name: "Social Engineering", level: 88 },
      { name: "Exploit Development", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    color: "secondary" as const,
    skills: [
      { name: "Kubernetes & Docker", level: 93 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Infrastructure as Code", level: 88 },
      { name: "Monitoring & Logging", level: 86 },
    ],
  },
  {
    icon: Code2,
    title: "Programming & Automation",
    color: "accent" as const,
    skills: [
      { name: "Python Scripting", level: 94 },
      { name: "Bash & PowerShell", level: 91 },
      { name: "Go & Rust", level: 82 },
      { name: "JavaScript/TypeScript", level: 88 },
    ],
  },
];

const certifications = [
  { name: "OSCP", icon: Lock, color: "primary" as const },
  { name: "CEH", icon: Shield, color: "secondary" as const },
  { name: "AWS Security", icon: Cloud, color: "accent" as const },
  { name: "CKA", icon: Server, color: "primary" as const },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(157 0 255) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(157 0 255) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-accent"
            style={{
              filter: "drop-shadow(0 0 16px currentColor)",
            }}
            data-testid="text-skills-title"
          >
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" 
            style={{ filter: "drop-shadow(0 0 8px rgb(157 0 255))" }} 
          />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            Technical proficiencies across security, infrastructure, and development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 space-y-6"
                data-testid={`card-skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={`p-2 rounded-lg bg-${category.color}/10 border border-${category.color}/30`}
                    style={{ filter: `drop-shadow(0 0 8px hsl(var(--${category.color})))` }}
                  >
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground" data-testid="text-category-title">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                      color={category.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-card/20 backdrop-blur-sm border border-primary/30 rounded-lg p-8">
          <h3 
            className="font-serif text-2xl font-bold text-center mb-8 text-primary"
            style={{ filter: "drop-shadow(0 0 8px currentColor)" }}
            data-testid="text-certifications-title"
          >
            Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={cert.name}
                  className={`flex flex-col items-center gap-3 p-6 rounded-lg bg-${cert.color}/10 border border-${cert.color}/30 hover:border-${cert.color}/60 transition-all`}
                  style={{ filter: `drop-shadow(0 0 12px hsl(var(--${cert.color}) / 0.2))` }}
                  data-testid={`badge-cert-${cert.name.toLowerCase()}`}
                >
                  <Icon className={`w-8 h-8 text-${cert.color}`} />
                  <span className="font-mono font-semibold text-foreground">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
