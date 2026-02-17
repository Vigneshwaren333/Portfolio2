import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
  rotation: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, rotation }) => {
  return (
    <div className={`transform-gpu transition-transform duration-300 hover:scale-105 hover:rotate-0 ${rotation}`}>
      <Card className={`bg-card border-4 border-black rounded-xl shadow-[8px_8px_0px_black] h-full flex flex-col`}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {project.descriptionPoints && project.descriptionPoints.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 mb-4 text-sm text-muted-foreground">
              {project.descriptionPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge key={i} variant="secondary" className="font-mono border-black border-2">{tech}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Impact:</h4>
            <p className="text-sm text-muted-foreground">{project.impact}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2 mt-auto pt-4">
          {project.github && (
            <Button variant="outline" size="sm" asChild className="border-foreground/20 rounded-lg font-bold hover:bg-foreground/10 hover:text-foreground">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}
          {project.liveLink && (
            <Button variant="default" size="sm" asChild className="bg-primary text-primary-foreground rounded-lg font-bold shadow-md hover:bg-primary/90 transition-all">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
