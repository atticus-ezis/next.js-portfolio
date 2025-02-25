import React from 'react';

function Card({ image, title, description, link, github, skill }) {
  return (
    <div className="flex h-[400px] w-full max-w-[400px] flex-shrink-0 flex-col items-center rounded-xl bg-white p-4">
      <h1 className="mb-3 w-full overflow-hidden truncate text-ellipsis whitespace-nowrap text-center text-2xl font-bold text-gray-600">
        {title}
      </h1>
      <div className="group relative w-full overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <a className="block" href={`${link}`} target="_blank">
          <img
            className="min-h-30 mx-auto h-48 w-full flex-1 rounded-lg border-x-2 border-gray-400 object-cover"
            src={`/${image}`}
            alt={title}
          />
          {/* description overlay */}
          <div className="duration-600 absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4 text-center opacity-0 transition-opacity md:group-hover:opacity-100">
            {description}
          </div>
        </a>
      </div>
      {/* skill section */}
      <div className="-blue-700 mx-auto mt-4 flex w-full flex-grow items-center justify-between rounded-lg bg-blue-700 p-3 px-4 text-center text-sm font-medium text-gray-200">
        <div className="">
          <div className="text-xl md:text-sm">{skill}</div>
        </div>
        <div className="flex-shrink-0 transition-transform hover:scale-105 hover:cursor-pointer">
          <a href={`${github}`}>
            <img src="/github.svg" className="h-12 w-12 flex-shrink-0" alt=" GitHub Log" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
