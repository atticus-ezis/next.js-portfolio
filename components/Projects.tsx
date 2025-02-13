' use client ';
import React from 'react';
import Card from './Card';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  skill: string[];
}
// const projects= [
//     {id: 0, title: 'Board4theBoard', description: "Find events in your area and filter results based on category, date and venue.", image: 'Board4theBored.png', link: 'https://aezis.pythonanywhere.com/', skill: 'RESTful APIs'},
//     {id: 1, title: 'Blogs4TheCriminallyInsane', description: 'See what a blogsite run by the criminally insane would look like. Sign up, save posts, leave a comment, or even create a library of posts.', image: 'blogs4criminals.jpg', link: 'https://www.blogsforthecriminallyinsane.com/', skill:'AWS hosting with custom domain'},
//     {id: 2, title: 'The Mix', description: 'Portfolio of my music. Shuffle, download and like tracks.', image: 'TheMix.png', link: 'https://atticus-ezis.github.io/BEATS-BY-ME/', skill:"HTML, CSS, JavaScript & realtime database"},
//     {id: 3, title: 'Ear Dojo', description: 'Play this game to test your interval recognition and imporve as a musician.', image: 'EarDojo.png', link: 'https://atticus-ezis.github.io/Ear-Training/', skill:"HTML, CSS, JavaScript"},
// ];

const projects: Project[] = [
  {
    id: 0,
    title: 'Board4theBoard',
    description: 'Find events in your area and filter results based on category, date and venue.',
    image: '/Board4theBored.png',
    link: 'https://aezis.pythonanywhere.com/',
    skill: ['RESTful APIs', 'web dev', 'html', 'css'],
  },
  {
    id: 1,
    title: 'Direct Investing',
    description: 'A web platform to manage and track direct investment portfolios.',
    // image: '/direct-investing.jpg',
    image: '/Board4theBored.png',
    link: '#',
    skill: ['RESTful APIs', 'web dev', 'html', 'css'],
  },
  {
    id: 2,
    title: 'American Literature',
    description: "Short stories, a Children's library, & classic literature.",
    image: '/american-lit.png',
    link: 'https://americanliterature.com/',
    skill: ['RESTful APIs', 'web dev', 'html', 'css'],
  },
  {
    id: 3,
    title: 'Loho',
    description: 'A real estate listing website with premium property listings.',
    // image: '/real-estate.jpg',
    image: '/Board4theBored.png',
    link: '#',
    skill: ['RESTful APIs', 'web dev', 'html', 'css'],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative bg-white p-4 rounded-3xl shadow-lg overflow-hidden">
      <div className="flex justify-between items-center mt-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/atticus-ezis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/github.svg" alt="File icon" width={30} height={30} />
        </a>
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">→</button>
      </div>
      {/* <div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-2xl mt-2 rounded-[17]"
        />
      </div> */}

      <div className="flex flex-col justify-between mt-4">
        <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>
        <p className="text-gray-500 text-sm">{project.description}</p>
      </div>

      <div className="flex items-center gap-2 opacity-60 flex-wrap mt-4">
        {project.skill.map((skill) => (
          <div key={skill} className="top-4 left-4 bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <>
      <div className="py-12 px-[3rem] mt-[12rem] ">
        <div className="flex flex-col justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Recent projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* <div>
        <div>Projects</div>
        <div className="flex">
          {projects.map((project, index) => (
            <Card key={project.id + index} {...project} />
          ))}
        </div>
      </div> */}
    </>
  );
};
