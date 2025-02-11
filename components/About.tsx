import React from 'react';

export const About = () => {
  return (
    <div className="px-[3rem] mt-[12rem] grid grid-cols-1 sm:grid-cols-2 gap-[2rem]">
      <div className="flex justify-center p-8 order-first sm:order-none">
        <img className="rounded-full object-cover" src="/profile.png" alt="Profile" />
      </div>

      <div>
        <div className="animated fadeInLeft pb-8">
          <p className="font-bold text-2xl text-[#ee8310]">About me</p>
        </div>

        <div>
          <div>
            <p className="text-xl">
              I'm a full-stack web developer, with a wide range of frameworks especially Django, which I've used to
              contributed to the redesign of <a href="https://americanliterature.com/">amrican-literature</a>, a popular
              platform that attracts over 400,000 visitors each month. I am skilled in building and deploying web
              applications on AWS and am increasingly focusing on machine learning and data analytics by pursuing AWS
              certifications. I excel in collaborative environments, consistently delivering solutions that address
              complex problems and I'm currently seeking an entry-level role where I can grow my skillset.
            </p>
          </div>

          <br />
          <br />
          <div>
            <h1>Skills</h1>
            <p>Front-end: React, Tailwind, Bootstrap</p>
            <p>Back-end: Django, React, Next.js, PostgreSQL, Restful API</p>
          </div>
        </div>
      </div>
    </div>
  );
};
