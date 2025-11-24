import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/security_dashboard_project_thumbnail.png';

export default function ProjectCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProjectCard
        title="Security Dashboard"
        description="Real-time security monitoring platform with threat detection, vulnerability scanning, and incident response automation."
        tags={["React", "Node.js", "PostgreSQL", "Docker"]}
        image={projectImage}
        demoUrl="#"
        githubUrl="#"
        glowColor="primary"
      />
    </div>
  );
}
