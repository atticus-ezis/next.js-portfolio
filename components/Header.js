import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="fixed top-0 w-full p-4 flex gap-6 justify-end mr-0 z-11">
    <nav>
      <ul className="flex items-center gap-2 ">
      <li className="px-4 py-2">
          <a href="#hero" className="hover:underline hover:underline-offset-4">Home</a>
        </li>
        <li className="px-4 py-2">
          <a href="#about" className="hover:underline hover:underline-offset-4">About</a>
        </li>
        <li className="px-4 py-2">
          <a href="#projects" className="hover:underline hover:underline-offset-4">Projects</a>
        </li>
        <li className="px-4 py-2">
          <a href="#experience" className="hover:underline hover:underline-offset-4">Experience</a>
        </li>
        <li className="px-4 py-2">
          <Link href="/aiChat" className="hover:underline hover:underline-offset-4">Ask My AI</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}
