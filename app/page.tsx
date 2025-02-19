import { AiChat, About, Projects, Experience, Footer, Header, Wrapper, Hero } from '@/components/directory';

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth">
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
