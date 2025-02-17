import React from 'react';

function Card({ image, title, description, link, skill }) {
  return (
    <>
      <div className="m-4 w-full md:w-80 ">
        {/* title */}
        <h1 className="text-center text-xl font-bold">{title}</h1>
        {/* card */}
        <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <a className="block" href={`/${link}`}>
            {/* image */}
            <div>
              <img className="w-64 h-40 rounded-lg object-cover mx-auto" src={`/${image}`} alt={title}></img>
            </div>
          </a>
          {/* skills */}
          <div className="">
            <div className="bg-blue-700 h-16 center rounded-lg mt-3 text-gray-200 text-sm text-center font-medium">
              {skill}
            </div>
            <div>
              <image src="/github.svg"></image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
