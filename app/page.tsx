import { AiChat, About, Projects, Experience, Footer, Header, Wrapper, Hero } from '@/components/directory';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-screen snap-y snap-mandatory overflow-y-auto">
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
  );
}
