import React from 'react';
import { techStack } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechStack = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {Object.entries(techStack).map(([category, techs]) => (
          <Card key={category} className="bg-card border border-border shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {techs.map((tech) => (
                   <div key={tech} className="font-medium bg-secondary text-secondary-foreground px-4 py-2 rounded-lg border border-border">
                    {tech}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TechStack;
