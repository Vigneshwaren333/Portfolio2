"use client";

import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import type { Theme } from '@/app/page';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; className?: string; onClick?: () => void }> = ({ href, children, className, onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isHomePage = window.location.pathname === '/';
        
        if (href === '/') {
            if (!isHomePage) {
                window.location.href = '/';
            } else {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (onClick) onClick();
            return;
        }

        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);

            if (isHomePage) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // offset for sticky header
                        behavior: 'smooth',
                    });
                }
            } else {
                window.location.href = `/${href}`;
            }
        }
        
        if (onClick) {
            onClick();
        }
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
      { href: "#about", text: "ABOUT" },
      { href: "#projects", text: "PROJECTS" },
      { href: "#tech-stack", text: "STACK" },
      { href: "#experience", text: "EXPERIENCE" },
      { href: "#education", text: "EDUCATION" },
      { href: "#contact", text: "CONTACT" },
  ];

  return (
    <>
      <header className="sticky top-4 z-50 w-full px-4">
          <nav className="mx-auto max-w-6xl flex items-center justify-between p-2 rounded-full bg-card/60 border border-border/50 backdrop-blur-md">
              <NavLink href="/" className="bg-primary text-primary-foreground font-bold px-4 md:px-6 py-2 rounded-full text-sm">
                  VIGNESHWAREN
              </NavLink>
              <div className="hidden lg:flex items-center gap-x-6">
                  {navLinks.map(link => (
                    <NavLink key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{link.text}</NavLink>
                  ))}
              </div>
              <div className="flex items-center gap-2">
                   <NavLink href="#contact" className="hidden sm:inline-flex bg-accent text-accent-foreground font-bold px-6 py-2 rounded-full text-sm hover:bg-accent/90 transition-colors">
                      HIRE ME
                  </NavLink>
                  <ThemeToggle theme={theme} setTheme={setTheme} />
                  <button className="lg:hidden p-2 text-muted-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
              </div>
          </nav>
      </header>
      {isMenuOpen && (
          <div className="lg:hidden">
              <div className="mx-4 -mt-2 mb-4 p-6 flex flex-col items-center gap-4 rounded-3xl bg-card/95 border-border/50 backdrop-blur-md">
                  {navLinks.map(link => (
                      <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">{link.text}</NavLink>
                  ))}
              </div>
          </div>
      )}
    </>
  );
};

export default Header;
