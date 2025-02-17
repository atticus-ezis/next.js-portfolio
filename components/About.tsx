import React from 'react';

export const About = () => {
  return (
    <div className="container mx-auto p-8 h-[80%]">
      <h1 className="text-5xl center">About</h1>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div>
            <h1>Web Design</h1>
            <p>
              I'm a full-stack web developer, who's worked with a wide range of frameworks, especially Django, which
              I've used to contributed to the redesign of{' '}
              <a href="https://americanliterature.com/">AmericanLiterature.com</a>, a popular platform that attracts
              over 400,000 visitors each month.
            </p>
            <div className="bg-white rounded-md min-w-10 min-h-10 w-fit p-4">
              <table className=""></table>
            </div>
          </div>
          <div>
            <h1>Data Analytics</h1>
            <p>
              I've used linear regressions to predict crypto pricing with Python and increased my investment return by
              24%
            </p>
          </div>
          <div>
            <h1>LMM Development</h1>
            <p>
              I can utilize Large Language Models and develop RAG applications to build custom AIs like the one on this
              site.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col order-first md:order-none">
          <h1>Column right</h1>
          <div className="center">
            <img className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover mt-5" src="/profile.JPG"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="">
        <div className="animated fadeInLeft">
          <h2>About me</h2>
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
        <img className="rounded-full object-cover" src="/profile.JPG"></img>
      </div> */
}
