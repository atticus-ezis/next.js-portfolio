'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollToSection';

export const Hero = () => {
  return (
    <div className="center container mx-auto h-screen gap-8">
      <div className="text-5xl">Hello, I&apos;m Atticus</div>
      <div className="flex gap-4">
        <Link
          className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] sm:h-12 sm:px-5 sm:text-base"
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
          className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
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
