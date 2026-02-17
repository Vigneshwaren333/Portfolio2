"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import TechStack from "@/app/components/TechStack";
import Experience from "@/app/components/Experience";
import Education from "@/app/components/Education";
import Footer from "@/app/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import Section from "./components/Section";
import Contact from "./components/Contact";

export type Theme = 'light' | 'dark';

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

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
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

  if (!isMounted) {
    return (
      <div className="bg-background min-h-screen">
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <div className="bg-card">
          <Section id="about">
              <About />
          </Section>
        </div>
        <Section id="projects">
            <Projects />
        </Section>
        <div className="bg-card">
          <Section id="tech-stack">
              <TechStack />
          </Section>
        </div>
        <Section id="experience">
            <Experience />
        </Section>
        <div className="bg-card">
          <Section id="education">
              <Education />
          </Section>
        </div>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
