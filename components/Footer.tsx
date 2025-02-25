import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-10 flex w-full flex-wrap items-center justify-center gap-6 bg-[#0a0a0a] p-4">
      <a
        className="text-green flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
        href="https://github.com/atticus-ezis"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/github.svg" alt="File icon" width={16} height={16} />
        GitHub
      </a>
      <a
        className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/atticusezis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/linkedin.png" alt="Window icon" width={16} height={16} />
        Linkedin
      </a>
      <a
        className="flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
        href="mailto:atticus.ezis@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image aria-hidden src="/gmail.svg" alt="Globe icon" width={16} height={16} />
        Email
      </a>
    </footer>
  );
};
