import React from "react";

export const About = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div>
            <h1>A little about me..</h1>
          </div>
          <div>
            <div className="max-w-300 max-h-300">
              <img
                className="max-w-[300px] max-h-[300px]"
                src="/profile.JPG"
              ></img>
            </div>

            <div>
              <p>
                Hi there, I'm Atticus! A full-stack web-developer who can take
                modern, responsive apps from conception to completion.
              </p>
              <p>
                I'm currently working to expand my scope to include Data
                Analytics as well as LLM Engineering to improve my backend
                skillset.
              </p>
            </div>

            <div>
              <h1>Skills</h1>
              <ul>
                <h1>Front-end:</h1>
                <li>React</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
              </ul>
              <ul>
                <h1>Back-end:</h1>
                <li>Django</li>
                <li>React</li>
                <li>Next.js</li>
                <li>PostgreSQL</li>
                <li>Restful API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
