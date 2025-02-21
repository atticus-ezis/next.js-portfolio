'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { scrollToSection } from '@/utils/scrollToSection';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full p-4 flex gap-6 justify-center mr-0 z-10">
      <nav className="bg-[#21212150] backdrop-blur-[6px] justify-center fixed top-0 w-full  shadow-md p-4 flex gap-4">
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
      className="cursor-pointer hover:underline hover:underline-offset-4 text-white hover:text-gray-500"
    >
      {name.toUpperCase()}
    </Link>
  );
};
