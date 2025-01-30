import Image from "next/image";
import { Hero, Index, About, Projects, Experience } from '@/components/directory'


export default function Home() {
  return (
    <>
    <div className=" flex flex-col min-h-screen">

      <section id="hero">
        <Hero />
      </section>

      <section className='h-screen flex flex-col justify-center items-center' id="index">
        <Index /> 
      </section>

      <section className='h-screen flex flex-col justify-center items-center' id="about">
        <About />
      </section>

      <section className='h-screen flex flex-col justify-center items-center' id="projects">
        <Projects />
      </section>

      <section className='h-screen flex flex-col justify-center items-center' id="experience">
        <Experience /> 
      </section>

      <footer className="fixed bottom-0 w-full p-4 flex gap-6 flex-wrap items-center justify-center z-10 ">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              GitHub
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Linkedin
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Email
            </a>
      </footer>

    </div>
    </>
  );
}
