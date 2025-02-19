'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {} from '@/utils/scrollToSection';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Ensure the URL updates
    window.history.pushState(null, '', `#${id}`);
  }
};

export const Hero = () => {
  return (
    <div className="container center h-screen gap-8 mx-auto">
      <div className="text-5xl">Hello, I'm Atticus</div>
      <div className="flex gap-4">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#ai"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('ai');
            window.history.pushState(null, '', `#ai`);
          }}
        >
          <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
          Chat with my AI
        </Link>

        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#about"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
            window.history.pushState(null, '', `#about`);
          }}
        >
          View my Portfolio
        </Link>
      </div>
    </div>
  );
};
