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
                <div className="grid">
                    <div><img src={python} alt="python" /><div className="skill-caption">Python</div></div>
                    <div><img src={java} alt="java" /><div className="skill-caption">Java</div></div>
                    <div><img src={go} alt="go" /><div className="skill-caption">Go</div></div>
                    <div><img src={html} alt="html" /><div className="skill-caption">HTML</div></div>
                    <div><img src={css} alt="css" /><div className="skill-caption">CSS</div></div>
                    <div><img src={javascript} alt="js" /><div className="skill-caption">JavaScript</div></div>
                    <div><img src={react} alt="react" /><div className="skill-caption">React</div></div>
                    <div><img src={pandas} alt="pandas" /><div className="skill-caption">pandas</div></div>
                    <div><img src={numpy} alt="numpy" /><div className="skill-caption">NumPy</div></div>
                    <div><img src={scikitlearn} alt="sklearn" /><div className="skill-caption">scikit-learn</div></div>
                    <div><img src={pytorch} alt="pytorch" /><div className="skill-caption">PyTorch</div></div>
                    <div><img src={postgres} alt="postgres" /><div className="skill-caption">PostgreSQL</div></div>
                    <div><img src={docker} alt="docker" /><div className="skill-caption">Docker</div></div>
                    <div><img src={git} alt="git" /><div className="skill-caption">Git</div></div>
                    <div><img src={bash} alt="bash" /><div className="skill-caption">Bash</div></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
