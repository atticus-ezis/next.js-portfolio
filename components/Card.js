import React from 'react';

function Card({ image, title, description, link, github, skill }) {
  return (
    <div className="flex h-fit w-full max-w-sm flex-shrink-0 flex-col items-center rounded-lg bg-white p-4 shadow-lg">
    <h1 className="mb-3 w-full overflow-hidden truncate text-ellipsis whitespace-nowrap text-center font-bold text-gray-600">
      {title}
    </h1>
    <div className="group relative w-full overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <a className="block" href={link} target="_blank">
        <img
          className="mx-auto h-48 w-full rounded-lg border-x-2 border-gray-400 object-cover"
          src={`/${image}`}
          alt={title}
        />
        {/* Description Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </div>
      </a>
    </div>
    {/* Skill Section */}
    <div className="mx-auto mt-4 flex h-[75px] w-full items-center justify-between rounded-lg bg-blue-500 p-3 px-4 text-center text-sm font-medium text-gray-200">
      <div>{skill}</div>
      <div className="flex-shrink-0 transition-transform hover:scale-105 hover:cursor-pointer">
        <a href={github}>
          <img src="/github.svg" className="h-12 w-12 flex-shrink-0" alt="GitHub Logo" />
        </a>
      </div>
    </div>
  </div>
  );
}

export default Card;


