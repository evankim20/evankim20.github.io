import React from 'react'
import ListItem from '../Components/ListItem'
import ListSkills from '../Components/ListSkills'

import fb from "../Images/logos/fb.webp"
import mit from "../Images/logos/mit.png"
import csail from "../Images/logos/csail.jpg"
import apple from "../Images/logos/apple.png"
import exxonmobil from "../Images/logos/exxonmobil.png"
import fixt from "../Images/logos/fixt.jpg"
import lowell from "../Images/logos/lowel.jpeg"
import inspirit from "../Images/logos/inspirit.png"

function Experience() {
    return (
        <div className="experience-section" id="experience">
            <div id="section-wrapper">
                <h1 className="section-heading">Work Experience</h1>
                <hr />
                <a href="https://facebook.com">
                    <img src={fb}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Facebook" year="Summer 2021" position="Software Engineering Internship" description="Incoming summer intern"/>
                <br />
                <a href="https://www.csail.mit.edu/">
                    <img src={csail}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="MIT Computer Science and AI Laboratory" year="2021 - present" position="Undergraduate Research Assistant" location="Cambridge, MA" description="hi"/>
                <br />
                <a href="https://www.apple.com/">
                    <img src={apple}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Apple" position="Software Engineering Internship" year="Summer 2020" description="hi"/>
                <br />
                <a href="https://www.csail.mit.edu/">
                    <img src={csail}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="MIT Computer Science and AI Laboratory" year="Spring 2020" position="Undergraduate Research Assistant" location="Cambridge, MA" description="hi"/>
                <br />
                <a href="https://corporate.exxonmobil.com/">
                    <img src={exxonmobil}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="ExxonMobil" year="Summer 2019" position="Data Architecture/Analytics Intern" location="Houston, TX" description="hi"/>
                <br />
                <a href="https://www.fixt.co/">
                    <img src={fixt}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Fixt" year="January 2019" position="Data Science Intern" location="Baltimore, MD" description="hi"/>
                <br />
                <a href="https://lowellinstruments.com/">
                    <img src={lowell}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Lowell Instruments" year="Summer 2018" position="Software Engineering Intern" location="Falmouth, MA" description="hi"/>
                <ListSkills />
                <h1 className="section-heading">Teaching Experience</h1>
                <hr />
                <a href="https://www.mit.edu/">
                    <img src={mit}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Massachusetts Institute of Technology" year="Spring 2021" position="Undergraduate Teaching Assistant" location="Cambridge, MA" description="6.033: Computer Systems Engineering"/>
                <br />
                <a href="https://www.inspiritai.com/">
                    <img src={inspirit}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Inspirit AI" year="Winter 2020 - present" position="Tutor" location="Remote" description="hi"/>
            </div>
        </div>
    )
}

export default Experience
