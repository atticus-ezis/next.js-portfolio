import { Hero, About, Projects, Experience, Footer, Header, Wrapper } from '@/components/directory';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Wrapper id="hero">
        <Hero />
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
