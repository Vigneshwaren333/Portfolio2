import React from 'react';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  return (
    <section id={id} className={`container mx-auto px-4 md:px-8 py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
