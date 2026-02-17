"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedText from './AnimatedText';

const Hero = () => {
  const roles = ["Full-Stack Developer", "Automation Builder"];
  return (
    <section id="hero" className="min-h-[calc(80vh)] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-1 rounded-full text-sm border-2 border-primary/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Available for Work
        </div>
        <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl tracking-tighter">
          Hi, I’m Vigneshwaren
        </h1>
        <AnimatedText roles={roles} />
        <p className="max-w-2xl text-lg text-foreground/70">
          I specialize in full-stack development and building efficient automations that streamline workflows and solve real-world problems.
        </p>
        <div className="flex gap-4 justify-center mt-4">
            <Button size="lg" asChild className="bg-primary text-primary-foreground font-bold rounded-full shadow-lg hover:bg-primary/90 transition-all text-base hover:scale-105">
                <Link href="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-bold rounded-full border-2 border-foreground/50 shadow-lg hover:bg-foreground/10 transition-all text-base hover:scale-105">
                <a href="#contact">Contact</a>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
