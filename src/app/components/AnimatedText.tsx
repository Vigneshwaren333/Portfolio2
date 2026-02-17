"use client";

import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  roles: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ roles }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delay = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(prevText => prevText.substring(0, prevText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
      }
    } else {
      if (text.length < currentRole.length) {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, delay]);

  return (
    <p className="text-2xl md:text-3xl text-foreground/90 font-medium h-12 md:h-14">
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default AnimatedText;
