import React from 'react'
import headshot from "../Images/headshot.png"
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';


function Nametag() {
    const user = "evkim.dev"; 
    const domain = "gmail.com";

    return (
        <div className="nametag">
            <div id="photo">
                <img src={headshot}  alt="Headshot" id="headshot"/>
            </div>
            <div id="bio">
                <h2 className="subheading">Hello, my name is</h2>
                <h1 id="name-nametag">Evan Kim</h1>
                <div className="content">I’m a fourth year student at MIT majoring in computer science and an aspiring software engineer.  I also have experience and am interested in machine learning and the intersection of healthcare.  I'm currently the captain of the men's varsity water polo team at MIT and I enjoy staying active, playing fantasy football, and reading.
                </div>
                <a href={"mailto:" + user + "@" + domain} className="website-link">
                    <HiMail />
                </a>
                <a href="https://www.linkedin.com/in/evan-kim-863b4514a/" className="website-link">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/evankim20" className="website-link">
                    <FaGithub />
                </a>
                
            </div>
        </div>
    )
}

export default Nametag
