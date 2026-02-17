import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 mt-16 py-6">
      <div className="container mx-auto px-4 md:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Vigneshwaren. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
