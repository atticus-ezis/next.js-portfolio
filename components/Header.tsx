'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollToSection';

export const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const checkHeroVisibility = () => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      const heroSpace = heroSection.getBoundingClientRect();
      setHideHeader(heroSpace.bottom > 0); // sets true if hero section is visible
    };

    checkHeroVisibility();

    window.addEventListener('scroll', checkHeroVisibility);

    return () => {
      window.removeEventListener('scroll', checkHeroVisibility);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.replace('#', ''); // Remove #
      setTimeout(() => scrollToSection(sectionId), 100); // Delay ensures layout is loaded
    }
  }, []);

  if (hideHeader) return null;

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

const NavLink = ({ section }: { section: string }) => {
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
