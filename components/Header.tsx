'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollToSection';

export const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  useEffect(() => {
    const scrollContainer = document.querySelector('.dynamic-vh');
    const heroSection = document.getElementById('hero');
    if (!heroSection || !scrollContainer) return;

    const checkHero = () => {
      const bound = heroSection.getBoundingClientRect();
      if (bound.bottom <= 0) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
    };

    checkHero();
    scrollContainer.addEventListener('scroll', checkHero);

    return () => {
      scrollContainer.removeEventListener('scroll', checkHero);
    };
  }, []);

  return (
    <header
      className={`duration-400 fixed top-0 z-10 mr-0 flex w-full justify-center gap-6 p-4 transition-opacity ${
        hideHeader ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <nav className="fixed top-0 flex w-full justify-center gap-4 bg-[#21212150] p-4 shadow-md backdrop-blur-[6px]">
        <NavLink section="ai" name="ai" />
        <NavLink section="about" name="about" />
        <NavLink section="projects" name="projects" />
        <NavLink section="experience" name="experience" />
      </nav>
    </header>
  );
};

const NavLink = ({ section, name }: { section: string; name: string }) => {
  return (
    <Link
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(section);
        window.history.pushState(null, '', `#${section}`);
      }}
      className="cursor-pointer text-white hover:text-gray-500 hover:underline hover:underline-offset-4"
    >
      {name.toUpperCase()}
    </Link>
  );
};
