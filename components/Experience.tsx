import React from 'react';

export const Experience = () => {
  return (
    <div className="mb-[55px] flex h-screen flex-col items-center justify-start pt-[55px]">
      <div className="text-center text-5xl font-bold">Experience</div>

      <div className="mx-6 mt-12 h-fit rounded-lg border bg-white p-6 shadow-lg">
        {/* Job Title */}
        <h2 className="text-2xl font-bold text-gray-800">Junior Developer for AmericanLiterature.com</h2>
        <h3 className="text-gray-500">(July 2024 - Present)</h3>

        {/* Job Responsibilities */}
        <div className="mt-4 text-gray-600">
          <h3 className="font-bold text-black">Duties:</h3>
          <ul className="list-inside list-disc font-semibold">
            <li>Improved UX with new library design.</li>
            <li>Maintain codebase, update and manage content, create error pages.</li>
          </ul>

          <h3 className="mt-4 font-bold text-black">Skills:</h3>
          <ul className="list-inside list-disc">
            <li>
              Query a PostgreSQL database and manage models such as stories and authors, along with attributes like
              rating and images, on the server-side.
            </li>
            <li>
              Dynamically render content on the client-side using JavaScript, while leveraging Django, a Python-based
              server-side framework, for backend processing.{' '}
            </li>
          </ul>
        </div>
      </div>
      {/* Before + After */}
      <div className="gap-2 p-5 md:flex">
        <div>
          <div className="text-2xl font-bold">Before</div>
          <img src="/before.png" alt="before.png" className="min-w-2 rounded-lg object-cover" />
        </div>
        <div>
          <div className="text-2xl font-bold">After</div>
          <img src="/after.png" alt="after.png" className="min-w-2 rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};
