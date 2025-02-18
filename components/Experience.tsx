import React from 'react';

export const Experience = () => {
  return (
    <div className="container mx-auto h-screen w-full rounded-lg mt-20 p-3">
      <div className="text-center text-5xl font-bold my-3">Experience</div>

      {/* Experience Block */}
      <div className="border rounded-lg p-6 shadow-lg bg-white mt-12">
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
  );
};
