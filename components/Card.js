import React from 'react';

function Card({ image, title, description, link, github, skill }) {
  return (
    <div className="w-[320px] h-fit bg-white rounded-xl p-4 flex flex-col flex-shrink-0 items-center">
      <h1 className="text-center text-2xl font-bold text-gray-600 mb-3 w-full truncate overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </h1>
      {/* card */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
        <a className="block" href={`${link}`} target="_blank">
          {/* image */}

          <img
            className="w-full h-48 object-cover rounded-lg mx-auto border-x-2 border-gray-400"
            src={`/${image}`}
            alt={title}
          ></img>

          {/* description overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 text-center opacity-0 transition-opacity duration-600 md:group-hover:opacity-100">
            {description}
          </div>
        </a>
      </div>
      {/* skills */}
      <div className="flex items-center justify-between w-full h-[75px] mt-4 px-4 -blue-700 rounded-lg p-3 text-gray-200 bg-blue-700 text-sm text-center font-medium mx-auto ">
        <div className="">
          <div className="">{skill}</div>
        </div>
        <div className="flex-shrink-0 transition-transform hover:scale-105 hover:cursor-pointer">
          <a href={`${github}`}>
            <img src="/github.svg" className="w-12 h-12 flex-shrink-0" alt=" GitHub Log" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
