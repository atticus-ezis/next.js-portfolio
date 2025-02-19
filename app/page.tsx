'use client';
import { useEffect } from 'react';
import { AiChat, About, Projects, Experience, Footer, Header, Wrapper, Hero } from '@/components/directory';

export default function Home() {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);
  return (
    <>
      <div className="dynamic-vh md:h-screen overflow-y-auto flex flex-col scroll-smooth snap-y snap-mandatory relative ">
        <Header /> {/* doesn't appear */}
        <Wrapper id="hero">
          <Hero />
        </Wrapper>
        <Wrapper id="ai">
          <AiChat />
        </Wrapper>
        <Wrapper id="about">
          <About />
        </Wrapper>
        <Wrapper id="projects">
          <Projects /> {/* fit carosel to full width and enhance styling */}
        </Wrapper>
        <Wrapper id="experience">
          <Experience />
        </Wrapper>
        <Footer /> {/* restrict width for better content visibility*/}
      </div>
    </>
  );
}
