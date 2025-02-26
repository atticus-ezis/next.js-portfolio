import React from 'react';

export const Experience = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
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
            <li>Maintained codebase, updated and managed content, created error pages.</li>
          </ul>

          <h3 className="mt-4 font-bold text-black">Skills:</h3>
          <ul className="list-inside list-disc">
            <li>
              Queried the site&apos;s PostgreSQL database to gather story information such as rating, image, and
              preface.
            </li>
            <li>Rendered information client-side dynamically with JavaScript.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
