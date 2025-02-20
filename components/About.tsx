import React from 'react';

export const About = () => {
  return (
    <div className="h-[85vh] relative top-14 flex flex-col items-center justify-start">
      <div className="px-6 bg-gray-100 h-fit rounded-lg overflow-y-auto no-scrollbar">
        <h1 className="text-5xl text-gray-700 font-bold text-center p-4">About</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content Section */}
          <div className="max-h-[80vh] md:w-2/3 flex flex-col justify-between gap-4">
            {/* Web Design Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2 text-gray-400">
                <code>Web Design</code>
              </h2>
              <p className="text-gray-700">
                I'm a full-stack web developer, specializing in frameworks like Django, contributing to the redesign of{' '}
                <a href="https://americanliterature.com/" className="text-blue-500 hover:underline">
                  AmericanLiterature.com
                </a>
                , a platform with over 400,000 visitors per month. I'm also familiar with other Model-View-Controller
                frameworks like Ruby and Next.js.
              </p>

              <div className="flex justify-start items-center flex-wrap gap-4 mt-4">
                <img src="/django.svg" className="h-12" alt="Django" />
                <img src="/postgre.svg" className="h-12" alt="PostgreSQL" />
                <img src="/react.svg" className="h-12" alt="React" />
                <img src="/bootstrap.svg" className="h-12" alt="Bootstrap" />
                <img src="/tailwind.svg" className="h-12" alt="Tailwind CSS" />
                <img src="/aws.svg" className="h-8" alt="AWS" />
              </div>
            </div>

            {/* Data Analytics Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2  text-gray-400">
                <code>Data Analytics</code>
              </h2>
              <p className="text-gray-700">
                I've applied linear regressions and standard deviations in Python to predict crypto pricing, increasing
                my investment return by 24%.
              </p>

              <div className="flex justify-start items-center flex-wrap gap-4 mt-4">
                <img src="/SQL.svg" className="h-12" alt="SQL" />
                <img src="/python.jpeg" className="h-12" alt="Python" />
                <img src="/pandas.png" className="h-12" alt="Pandas" />
                <img src="/NumPy.png" className="h-12" alt="NumPy" />
              </div>
            </div>

            {/* LMM Development Section */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <h2 className="text-2xl font-semibold mb-2  text-gray-400">LMM Development</h2>
              <p className="text-gray-700">
                I develop RAG applications using Large Language Models, including the AI on this site. Currently, I’m
                studying TensorFlow to enhance my predictave ability.
              </p>
              <div className="flex justify-start items-center flex-wrap gap-4 mt-4">
                <img src="/tensor.png" className="h-8" alt="TensorFlow" />
              </div>
            </div>
          </div>

          {/* Right Profile Section */}
          <div className="order-first md:order-none flex flex-col items-center">
            <img
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover mt-5 shadow-md"
              src="/profile.JPG"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
