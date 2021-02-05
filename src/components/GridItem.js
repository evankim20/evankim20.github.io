import React from 'react'

function GridItem( { title, description, github, image, link_text }) {
    return (
        <div className="item-wrapper">
            <img src={image} alt={title} style={{width: "100%"}} />
            <div className="middle">
                <div className="text">
                    <div className="project-title">{title}</div>
                    <div className="project-desc">{description}</div>
                    <br />
                    <a href={github} className="project-github">{link_text}</a>
                </div>
            </div>
        </div>
    )
}

export default GridItem
