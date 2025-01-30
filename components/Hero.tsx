'use client'

import React from 'react'
import Image from "next/image";
import Link from 'next/link'

export const Hero = () => {
  return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-center">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
            <div className="text-5xl mx-auto mb-0">Welcome</div>
            
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] mx-auto">
              <li className="mb-2">Talk to my personalized AI </li>
              <li>Explore my projects</li>
            </ol>
    
            <div className="flex gap-4 items-center flex-col sm:flex-row mx-auto">
              <Link
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/aiChat"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Chat With Me
              </Link>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="#index"
                rel="noopener noreferrer"
              >
                View Projects
              </a>
            </div>
    
          </main>
    
          
        </div>
  )
}
