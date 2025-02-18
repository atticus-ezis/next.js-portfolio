import React from 'react';

export const Experience = () => {
  return (
    <div className="container mx-auto h-full w-full bg-white rounded-lg mt-20 p-3">
      <div className="text-center text-gray-700 text-5xl font-bold my-3">Experience</div>
      <div className="center h-3/4">
        {/* Experience Block */}
        <div className="border rounded-lg p-6 shadow-lg bg-white">
          {/* Job Title */}
          <h2 className="text-2xl font-bold text-gray-800">Junior Developer for AmericanLiterature.com</h2>
          <h3 className="text-gray-500">(July 2024 - Present)</h3>

          {/* Job Responsibilities */}
          <div className="mt-4 text-gray-600">
            <h3 className="text-black font-bold">Duties:</h3>
            <ul className="list-disc list-inside font-semibold">
              <li>Improved UX with new library design.</li>
              <li>Maintained codebase, updated and managed content, created error pages.</li>
            </ul>

            <h3 className="text-black font-bold mt-4">Skills:</h3>
            <ul className="list-disc list-inside">
              <li>
                Queried the site's PostgreSQL database to gather story information such as rating, image, and preface.
              </li>
              <li>Rendered information client-side dynamically with JavaScript.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>Experience</div>
<div>
  <ul>
    Junior Developer
    <a href="https://americanliterature.com">
      <h1>American Literature.com</h1>
    </a>
    <li>Used Django to restyle the library for a better UX </li>
    <li>
      Interacted with the database via Django shell and Admin Console to gather new information such as rating,
      image and preface
    </li>
    <li>
      Created backend functions in Python and Front end functions in JavaScript to process and render the data.
    </li>
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
</div> */
}
