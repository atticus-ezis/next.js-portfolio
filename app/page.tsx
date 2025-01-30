
import { Hero, Index, About, Projects, Experience, Footer, Header } from '@/components/directory'


export default function Home() {
  return (
    <>
    <div className=" flex flex-col min-h-screen">
      <Header />

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

      <Footer />
    </div>
    </>
  );
}
