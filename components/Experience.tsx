(' use client ');

import React from 'react';

interface Certification {
  id: number;
  title: string;
  link: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: 0,
    title: 'Responsive-Web-Design',
    link: 'https://www.freecodecamp.org/certification/AtticusE/responsive-web-design',
    description: 'Responsive',
  },
  {
    id: 1,
    title: 'Java Script Algorithms and Data Structures',
    link: 'https://www.freecodecamp.org/certification/AtticusE/javascript-algorithms-and-data-structures-v8',
    description:
      'Demonstrates proficiency in JavaScript by mastering fundamental algorithms, data structures, and problem-solving techniques. Covers recursion, sorting algorithms, object-oriented programming, functional programming, and performance optimization. Ideal for building efficient and scalable applications.',
  },
  {
    id: 2,
    title: 'Databases and SQL for Python',
    link: 'https://www.coursera.org/account/accomplishments/verify/NGJN6NRVQEQM',
    description: 'Responsive',
  },
  {
    id: 3,
    title: 'Python for Data Science, AI & Development',
    link: 'https://www.coursera.org/account/accomplishments/verify/YWT8CXMSAEBS',
    description: 'Responsive',
  },
];

const Card: React.FC<{ project: Certification }> = ({ cert }) => {
  return (
    <div className="min-h-80 w-80 relative bg-white p-4 rounded-3xl shadow-lg overflow-hidden">
      <a href={cert.link}>
        <div className="flex flex-col justify-between mt-4">
          <h3 className="text-xl font-semibold text-gray-700">{cert.title}</h3>
          <p className="py-2 text-gray-500 text-sm">{cert.description}</p>
        </div>
      </a>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="py-12 px-[3rem] mt-[12rem] mb-[12rem] ">
      <div className="flex justify-between items-center mb-6 flex-col">
        <h2 className="text-3xl font-bold flex-col">Certifications</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6  items-center ">
        {certifications.map((cert) => (
          <Card key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
};
