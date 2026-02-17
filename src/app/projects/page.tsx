"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Section from "@/app/components/Section";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import type { Theme } from "@/app/page";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function LoadingScreen() {
  return (
    <div className="space-y-16 p-8">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-[300px] w-full rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-8 w-1/4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, isMounted]);

  const webProjects = projects.filter(p => p.category === 'Web');
  const aiProjects = projects.filter(p => p.category === 'AI');
  const automationProjects = projects.filter(p => p.category === 'Automation');
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1', '-rotate-1'];


  if (!isMounted) {
    return (
      <div className="bg-background min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  const categoryStyles = {
      Web: "text-green-400",
      AI: "text-blue-400",
      Automation: "text-purple-400",
  }

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Section id="projects-page">
           <div className="flex items-center justify-center relative mb-16">
            <Link href="/" passHref className="absolute left-0">
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                    <ArrowLeft className="h-6 w-6" />
                </Button>
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-center font-headline">All Projects</h1>
          </div>
          
          <div className="space-y-24">
            {webProjects.length > 0 && (
                <div>
                  <h2 className={`text-4xl font-bold mb-8 font-headline ${categoryStyles.Web}`}>Web Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {webProjects.map((project, index) => (
                      <ProjectCard key={index} project={project} rotation={rotations[index % rotations.length]} />
                    ))}
                  </div>
                </div>
            )}

            {aiProjects.length > 0 && (
                <div>
                  <h2 className={`text-4xl font-bold mb-8 font-headline ${categoryStyles.AI}`}>AI Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {aiProjects.map((project, index) => (
                      <ProjectCard key={index} project={project} rotation={rotations[index % rotations.length]} />
                    ))}
                  </div>
                </div>
            )}
            
            {automationProjects.length > 0 && (
                <div>
                  <h2 className={`text-4xl font-bold mb-8 font-headline ${categoryStyles.Automation}`}>Automation Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {automationProjects.map((project, index) => (
                      <ProjectCard key={index} project={project} rotation={rotations[index % rotations.length]} />
                    ))}
                  </div>
                </div>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
