import React from 'react';

function Card({ image, title, description, link, github, skill }) {
  return (
    <>
      <div className="w-full md:w-80 ">
        {/* title */}
        <h1 className="text-center text-xl font-bold">{title}</h1>
        {/* card */}
        <div className="p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
          <a className="block" href={`${link}`} target="_blank">
            <div className="relative">
              {/* image */}
              <div>
                <img className="w-64 h-40 rounded-lg object-cover mx-auto" src={`/${image}`} alt={title}></img>
              </div>
              {/* description overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-600 md:group-hover:opacity-100">
                {description}
              </div>
            </div>
          </a>
          {/* skills */}
          <div className="flex flex-col md:flex-row w-64 md:w-full items-center justify-center gap-2 bg-blue-700 rounded-lg mt-3 p-3 text-gray-200 text-sm text-center font-medium mx-auto">
            <div className="w-fit h-fit">
              <div className="">{skill}</div>
            </div>
            <div className="flex-shrink-0 transition-transform hover:scale-105 hover:cursor-pointer">
              <a href={`${github}`}>
                <img src="/github.svg" className="w-12 h-12 flex-shrink-0" alt=" GitHub Log" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
