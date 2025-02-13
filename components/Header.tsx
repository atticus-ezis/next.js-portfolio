'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { scrollToSection } from '@/utils/scrollToSection';

interface NavLinkProps {
  section: string;
}

export const Header = () => {
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.replace('#', ''); // Remove #
      setTimeout(() => scrollToSection(sectionId), 100); // Delay to ensure layout is loaded
    }
  }, []);

  const NavLink = ({ section }: NavLinkProps) => {
    return (
      <Link
        href={`#${section}`}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(section);
          window.history.pushState(null, '', `#${section}`);
        }}
        className="cursor-pointer hover:underline hover:underline-offset-4 text-white hover:text-gray-500"
      >
        {section.toUpperCase()}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full p-4 flex gap-6 justify-center mr-0 z-10">
      <nav className="bg-[#21212150] backdrop-blur-[6px] justify-center fixed top-0 w-full  shadow-md p-4 flex gap-4">
        <NavLink section="hero" />
        <NavLink section="about" />
        <NavLink section="projects" />
        <NavLink section="experience" />
      </nav>
    </header>
  );
};
