import React from 'react';

export const About = () => {
  return (
    <div className="top-14 flex flex-col items-center justify-start pt-[12%] sm:pt-[2%]">
      <div className="px-6">
        <h1 className="p-10 text-center text-5xl font-bold">About</h1>
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left Content Section */}
          <div className="flex flex-col justify-between gap-4 md:w-2/3">
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
                , a platform with over 400,000 visitors per month. I&apos;m also familiar with other
                Model-View-Controller frameworks like Ruby and Next.js. As well as front end tools like React, Tailwind
                and Bootstrap.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
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

              <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
                <img src="/SQL.svg" className="h-12" alt="SQL" />
                <img src="/python.jpeg" className="h-12" alt="Python" />
                <img src="/pandas.png" className="h-12" alt="Pandas" />
                <img src="/NumPy.png" className="h-12" alt="NumPy" />
              </div>
            </div>

            {/* LMM Development Section */}
            <div className="mb-4 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold text-gray-400">LMM Development</h2>
              <p className="text-gray-700">
                I develop RAG applications using Large Language Models, including the AI on this site. Currently,
                I&apos;m studying TensorFlow to enhance my predictave ability.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
                <img src="/tensor.png" className="h-8" alt="TensorFlow" />
              </div>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="order-first flex flex-col items-center md:order-none">
            <img
              className="mt-5 h-64 w-64 rounded-full object-cover shadow-md md:h-80 md:w-80"
              src="/profile.jpeg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
