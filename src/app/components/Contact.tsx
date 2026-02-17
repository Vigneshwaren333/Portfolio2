import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
        I'm always open to discussing new internships, projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary/90 transition-all text-base px-6">
          <a href="mailto:vigneshwaren5053@gmail.com" className="flex items-center">
            <Mail className="mr-2 h-5 w-5" /> vigneshwaren5053@gmail.com
          </a>
        </Button>
        <Button variant="outline" asChild size="icon" className="h-12 w-12 rounded-lg border-2 border-border hover:bg-accent">
            <a href="https://github.com/Vigneshwaren333/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
            </a>
        </Button>
        <Button variant="outline" asChild size="icon" className="h-12 w-12 rounded-lg border-2 border-border hover:bg-accent">
            <a href="https://www.linkedin.com/in/g-vignesh-waren-040a5a286/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
            </a>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
