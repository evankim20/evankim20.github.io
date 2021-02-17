import React from 'react'

import html from "../Images/skills/html.png"
import python from "../Images/skills/python.png"
import go from "../Images/skills/go.png"
import java from "../Images/skills/java.png"
import javascript from "../Images/skills/js.png"
import css from "../Images/skills/css.png"
import react from "../Images/skills/react.png"
import pandas from "../Images/skills/pandas.png"
import pytorch from "../Images/skills/pytorch.png"
import numpy from "../Images/skills/numpy.png"
import scikitlearn from "../Images/skills/scikitlearn.png"
import postgres from "../Images/skills/postgres.png"
import git from "../Images/skills/git.png"
import docker from "../Images/skills/docker.png"
import bash from "../Images/skills/bash.png"



function Skills() {
    return (
        <div className="skills-section" id="skills">
            <div id="section-wrapper">
                <h1 className="section-heading">Skills</h1>
                <hr className="divider"/>
            </div>
            <div className="container" id="projects-section-wrapper">
                <div className="box">
                    <img src={python} alt="python" className="skill-logo"/> <div className="skill-caption">Python</div>
                </div>
                <div className="box">
                    <img src={java} alt="java" className="skill-logo"/><div className="skill-caption">Java</div>
                </div>
                <div className="box">
                    <img src={go} alt="go" className="skill-logo"/><div className="skill-caption">Go</div>
                </div>
                <div className="box">
                    <img src={html} alt="html" className="skill-logo"/><div className="skill-caption">HTML</div>
                </div>
                <div className="box">
                    <img src={css} alt="css" className="skill-logo"/><div className="skill-caption">CSS</div>
                </div>
                <div className="box">
                    <img src={javascript} alt="js" className="skill-logo"/><div className="skill-caption">JavaScript</div>
                </div>
                <div className="box">
                    <img src={react} alt="react" className="skill-logo"/><div className="skill-caption">React</div>
                </div>
                <div className="box">
                    <img src={pandas} alt="pandas" className="skill-logo"/><div className="skill-caption">pandas</div>
                </div>
                <div className="box">
                    <img src={numpy} alt="numpy" className="skill-logo"/><div className="skill-caption">NumPy</div>
                </div>
                <div className="box">
                    <img src={scikitlearn} alt="sklearn" className="skill-logo"/><div className="skill-caption">scikit-learn</div>
                </div>
                <div className="box">
                    <img src={pytorch} alt="pytorch" className="skill-logo"/><div className="skill-caption">PyTorch</div>
                </div>
                <div className="box">
                    <img src={postgres} alt="postgres" className="skill-logo"/><div className="skill-caption">PostgreSQL</div>
                </div>
                <div className="box">
                    <img src={docker} alt="docker" className="skill-logo"/><div className="skill-caption">Docker</div>
                </div>
                <div className="box">
                    <img src={git} alt="git" className="skill-logo"/><div className="skill-caption">Git</div>
                </div>
                <div className="box">
                    <img src={bash} alt="bash" className="skill-logo"/><div className="skill-caption">Bash</div>
                </div>
            </div>
        </div>
    )
}

export default Skills
