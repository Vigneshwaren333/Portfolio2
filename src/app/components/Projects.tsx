import React from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Projects: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
        {featuredProjects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={project}
            />
          );
        })}
      </div>
      {projects.length > featuredProjects.length && (
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all">
                <Link href="/projects">View All Projects</Link>
            </Button>
        </div>
      )}
    </>
  );
};

export default Projects;
