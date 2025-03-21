import React from 'react';

export const About = () => {
  return (
    <div className="mt-4 flex h-screen flex-col items-center px-4 py-10 sm:px-6 md:px-10 md:py-[55px]">
      <div className="w-full max-w-7xl rounded-lg">
        <h1 className="mb-10 text-center text-4xl font-bold sm:text-5xl">About</h1>

        {/* Main Content Row (stacks on mobile, row on md+) */}
        <div className="flex flex-col items-center justify-center gap-8 md:w-full">
          {/* Profile Section */}
          <div className="flex justify-center md:w-1/3">
            <img
              className="h-48 w-48 rounded-full object-cover shadow-md sm:h-64 sm:w-64"
              src="/profile.jpeg"
              alt="Profile"
            />
          </div>

          {/* Content Section */}
          <div className="flex max-h-[50vh] flex-col gap-6 overflow-y-auto overscroll-contain md:w-2/3">
            {/* Web Design Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold text-gray-400">
                <code>Web Design</code>
              </h2>
              <p className="text-gray-700">
                I&apos;m a full-stack web developer, specializing in frameworks like Django, contributing to the
                redesign of{' '}
                <a href="https://americanliterature.com/" className="text-blue-500 hover:underline">
                  AmericanLiterature.com
                </a>
                , a platform with over 400,000 visitors per month. I&apos;m also familiar with other MVC frameworks like
                Ruby and Next.js, and front-end tools like React, Tailwind and Bootstrap.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <img src="/django.svg" className="h-12" alt="Django" />
                <img src="/postgre.svg" className="h-12" alt="PostgreSQL" />
                <img src="/react.svg" className="h-12" alt="React" />
                <img src="/bootstrap.svg" className="h-12" alt="Bootstrap" />
                <img src="/tailwind.svg" className="h-12" alt="Tailwind CSS" />
                <img src="/aws.svg" className="h-8" alt="AWS" />
              </div>
            </div>

            {/* Data Analytics Section */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold text-gray-400">
                <code>Data Analytics</code>
              </h2>
              <p className="text-gray-700">
                I&apos;ve applied linear regressions and standard deviations in Python to predict crypto pricing,
                increasing my investment return by 24%.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <img src="/SQL.svg" className="h-12" alt="SQL" />
                <img src="/python.jpeg" className="h-12" alt="Python" />
                <img src="/pandas.png" className="h-12" alt="Pandas" />
                <img src="/NumPy.png" className="h-12" alt="NumPy" />
              </div>
            </div>

            {/* LMM Development Section */}
            <div className="mb-12 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold text-gray-400">LMM Development</h2>
              <p className="text-gray-700">
                I develop RAG applications using Large Language Models, including the AI on this site. Currently,
                I&apos;m studying TensorFlow to enhance my predictive ability.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <img src="/tensor.png" className="h-8" alt="TensorFlow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
