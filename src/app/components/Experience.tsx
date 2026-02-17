"use client";

import React, { useState } from 'react';
import { experiences } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceCard = ({ experience }: { experience: (typeof experiences)[0] }) => {
  return (
    <Card className="border border-border rounded-xl bg-card shadow-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <div>
            <CardTitle className="text-2xl font-bold text-primary">{experience.role}</CardTitle>
            <CardDescription className="text-lg font-semibold">{experience.organization}</CardDescription>
          </div>
          <p className="text-sm text-muted-foreground font-mono">{experience.duration}</p>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-muted-foreground">
          {experience.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <Badge key={i} variant="outline" className="font-mono text-xs rounded-md">{tech}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
      <div className="relative max-w-4xl mx-auto pl-10">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/30"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute -left-[27px] top-1.5 w-5 h-5 rounded-full border-4 transition-colors duration-300 ${hoveredIndex === index || (index === 0 && hoveredIndex === null) ? 'bg-primary border-background' : 'bg-accent border-background'}`}></div>
               <div className="absolute top-3.5 -left-2 h-0.5 w-8 bg-primary/30"></div>
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
