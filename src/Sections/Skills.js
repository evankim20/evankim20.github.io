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
                <hr />

                <div class="grid">
                    <div><img src={html} alt="" /><div className="skill-caption">HTML</div></div>
                    <div><img src={go} alt="" /><div className="skill-caption">Go</div></div>
                    <div><img src={python} alt="" /><div className="skill-caption">Python</div></div>
                    <div><img src={java} alt="" /><div className="skill-caption">Java</div></div>
                    <div><img src={javascript} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={css} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={react} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={pandas} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={pytorch} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={numpy} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={scikitlearn} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={postgres} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={git} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={docker} alt="" /><div className="skill-caption">Javascript</div></div>
                    <div><img src={bash} alt="" /><div className="skill-caption">Javascript</div></div>

                </div>
            </div>
        </div>
    )
}

export default Skills
