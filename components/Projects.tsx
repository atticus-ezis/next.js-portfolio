' use client ';
import React from 'react';
import Card from './Card';

export const Projects = () => {
  const projects = [
    {
      id: 0,
      title: 'Board4theBoard',
      description: 'Find events in your area and filter results based on category, date and venue.',
      image: 'Board4theBored.png',
      link: 'https://aezis.pythonanywhere.com/',
      github: 'https://github.com/atticus-ezis/boardforthebored.git',
      skill: 'RESTful APIs, Auto-Complete Functionality, Data-filtering',
    },
    {
      id: 1,
      title: 'Blogs4TheCriminallyInsane',
      description:
        'See what a blogsite run by the criminally insane would look like. Sign up, save posts, leave a comment, or even create a library of posts.',
      image: 'blogs4criminals.jpg',
      link: 'https://www.blogsforthecriminallyinsane.com/',
      github: 'https://github.com/atticus-ezis/test_blog.git',
      skill: 'AWS hosting, User-Authentication, CRUD functionality.',
    },
    {
      id: 2,
      title: 'The Mix',
      description: 'Portfolio of my music. Shuffle, download and like tracks.',
      image: 'TheMix.png',
      link: 'https://atticus-ezis.github.io/BEATS-BY-ME/',
      github: 'https://github.com/atticus-ezis/BEATS-BY-ME.git',
      skill: 'Realtime Database',
    },
    {
      id: 3,
      title: 'Ear Dojo',
      description: 'Play this game to test your interval recognition and improve as a musician.',
      image: 'EarDojo.png',
      link: 'https://atticus-ezis.github.io/Ear-Training/',
      github: 'https://github.com/atticus-ezis/Ear-Training.git',
      skill: 'HTML, CSS, JavaScript',
    },
  ];

  return (
    <>
      <div className="container mx-auto h-screen center">
        <div className="text-5xl font-bold mt-24 mb-8 md:mt-20">Projects</div>
        <div className="flex-grow h-0 overflow-auto">
          <div className="center md:flex-row">
            {projects.map((project, index) => (
              <Card key={project.id + index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
