' use client '
import React from 'react'
import Card from './Card'



export const Projects = () => {
    const projects= [
        {id: 0, title: 'Board4theBoard', description: "Find events in your area and filter results based on category, date and venue.", image: 'Board4theBored.png', link: 'https://aezis.pythonanywhere.com/', skill: 'RESTful APIs'},
        {id: 1, title: 'Blogs4TheCriminallyInsane', description: 'See what a blogsite run by the criminally insane would look like. Sign up, save posts, leave a comment, or even create a library of posts.', image: 'blogs4criminals.jpg', link: 'https://www.blogsforthecriminallyinsane.com/', skill:'AWS hosting with custom domain'},
        {id: 2, title: 'The Mix', description: 'Portfolio of my music. Shuffle, download and like tracks.', image: 'TheMix.png', link: 'https://atticus-ezis.github.io/BEATS-BY-ME/', skill:"HTML, CSS, JavaScript & realtime database"},
        {id: 3, title: 'Ear Dojo', description: 'Play this game to test your interval recognition and imporve as a musician.', image: 'EarDojo.png', link: 'https://atticus-ezis.github.io/Ear-Training/', skill:"HTML, CSS, JavaScript"},
    ];
    
  return (
    <>
        <div>
            <div>Projects</div>
                <div className="flex">
                    {projects.map((project, index)=> (
                        <Card key={project.id + index} {...project}/>
                    ))}
                </div>
        </div>
    </>
  )
}

