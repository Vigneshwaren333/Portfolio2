import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Full-Stack Development',
    'Workflow Automation',
    'Scalable Architecture',
    'Performance Optimization'
  ];

  return (
    <div className="text-center">
        <h2 className="text-4xl font-bold text-center mb-12">My Approach</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 font-body text-left md:text-center">
          <p>
            I’m passionate about building systems that are structured, scalable, and efficient. I enjoy working across the full stack — from designing intuitive user interfaces to architecting backend systems that handle complexity with clarity.
          </p>
          <p>
            Beyond traditional web development, I focus on automation — creating tools and workflows that reduce manual effort and improve productivity. I believe software should simplify processes and create measurable impact.
          </p>
          <p>
            I’m continuously improving my skills, exploring new technologies, and pushing myself to build solutions that are clean, reliable, and built to last.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {highlights.map((item) => (
              <li key={item} className="flex items-center justify-center gap-3 p-3 rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-primary hover:-translate-y-1">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
};

export default About;
