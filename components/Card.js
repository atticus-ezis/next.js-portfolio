import React from 'react'

function Card({image, title, description, link, skill}) {
    return (
        <>
            <div className='container'>
                <a href={`/${link}`}>
                    <div>
                        <img className="max-w-24 max-h-32" src={image} alt={title}></img>
                    </div>
                    <div>{title}</div>
                </a>
                <div>{description}</div>
                <div>Demonstrated Skills:</div>
                <code>{skill}</code>
            </div>
        </>
    )
}

export default Card;