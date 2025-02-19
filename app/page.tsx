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
      <div className="dynamic-vh flex flex-col overflow-y-auto scroll-smooth snap-y snap-mandatory relative ">
        <Header />
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
          <Projects />
        </Wrapper>

        <Wrapper id="experience">
          <Experience />
        </Wrapper>

        <Footer />
      </div>
    </>
  );
}
