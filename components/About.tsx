import React from 'react';

export const About = () => {
  return (
    <div className="mt-[12rem] grid grid-cols-2 gap-[2rem]">
      <div className="">
        <div className="animated fadeInLeft">
          <p className="font-bold text-2xl">About me</p>
        </div>

        <div>
          <div>
            <p>
              I'm a full-stack web developer, with a wide range of frameworks especially Django, which I've used to
              contributed to the redesign of <a href="https://americanliterature.com/">amrican-literature</a>, a popular
              platform that attracts over 400,000 visitors each month. I am skilled in building and deploying web
              applications on AWS and am increasingly focusing on machine learning and data analytics by pursuing AWS
              certifications. I excel in collaborative environments, consistently delivering solutions that address
              complex problems and I'm currently seeking an entry-level role where I can grow my skillset.
            </p>
          </div>

          <div>
            <h1>Skills</h1>
            <ul>
              <h1>Front-end:</h1>
              <li>React</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
            </ul>
            <ul>
              <h1>Back-end:</h1>
              <li>Django</li>
              <li>React</li>
              <li>Next.js</li>
              <li>PostgreSQL</li>
              <li>Restful API</li>
            </ul>
            <ul>
              <h1>Certifications:</h1>
              <li>
                <a href="https://www.freecodecamp.org/certification/AtticusE/responsive-web-design" target="_blank">
                  Responsive-Web-Design
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/certification/AtticusE/javascript-algorithms-and-data-structures-v8"
                  target="_blank"
                >
                  Java Script Algorithms and Data Structures
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/account/accomplishments/verify/NGJN6NRVQEQM" target="_blank">
                  Databases and SQL for Python
                </a>
              </li>
              <li>
                <a href="https://www.coursera.org/account/accomplishments/verify/YWT8CXMSAEBS" target="_blank">
                  Python for Data Science, AI & Development
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-8">
        <img className="rounded-full object-cover" src="/profile.png"></img>
      </div>
    </div>
  );
};
