import React from 'react'
import headshot from "../Images/headshot.png"

function Nametag() {
    return (
        <div className="nametag">
            <div id="photo">
                <img src={headshot}  alt="Headshot" id="headshot"/>
            </div>
            <div id="bio">
                <h2 className="subheading">Hello, my name is</h2>
                <h1>Evan Kim</h1>
                <div className="content">I’m a fourth year student at MIT majoring in computer science.  I’m an aspiring software engineer that 
                                        enjoys building applications.  I am also the captain of the men's varsity water polo team at MIT and I enjoy staying active, 
                                        playing fantasy football, and learning about almost anything!
                </div>
            </div>
        </div>
    )
}

export default Nametag
