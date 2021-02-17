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
                <hr className="divider"/>
                <a href="https://facebook.com">
                    <img src={fb}  alt="fb" id="icon"/>
                </a>
                <ListItem title="Facebook" year="Summer 2021" position="Software Engineering Internship" description="Incoming summer intern"/>
                <br />
                <a href="https://www.csail.mit.edu/">
                    <img src={csail}  alt="csail-1" id="icon"/>
                </a>
                <ListItem title="MIT Computer Science and AI Laboratory" year="2021 - present" position="Undergraduate Research Assistant" description="Incoming research assistant"/>
                <br />
                <a href="https://www.apple.com/">
                    <img src={apple}  alt="apple" id="icon"/>
                </a>
                <ListItem title="Apple" position="Software Engineering Internship" year="Summer 2020" description="Designed, developed, and deployed a Go REST API to autonomously and instantaneously identify trends and utilization of load balancers.  The project was pushed to production."/>
                <ListSkills skills={["Go", "SQL", "Docker"]}/>
                <br />
                <a href="https://www.csail.mit.edu/">
                    <img src={csail}  alt="csail-2" id="icon"/>
                </a>
                <ListItem title="MIT Computer Science and AI Laboratory" year="Spring 2020" position="Undergraduate Research Assistant" description="Evaluated multi-task learning on electronic health record timeseries data.  Assessed different machine learning models and engineered unit tests to validate models."/>
                <ListSkills skills={["Python", "PyTorch"]}/>
                <br />
                <a href="https://corporate.exxonmobil.com/">
                    <img src={exxonmobil}  alt="exxon" id="icon"/>
                </a>
                <ListItem title="ExxonMobil" year="Summer 2019" position="Data Architecture/Analytics Intern" description="Modeled and analyzed internal financial data to optimize revenue management.  Contributed to a framework that internalized marking data."/>
                <ListSkills skills={["Python", "R", "SQL", "Azure", "pandas"]}/>
                <br />
                <a href="https://www.fixt.co/">
                    <img src={fixt}  alt="fixt" id="icon"/>
                </a>
                <ListItem title="Fixt" year="January 2019" position="Data Science Intern" description="Built machine learning models that produced failed repairs to improve service and optimize revenue.  Also developed a tool that scraped potential opportunities across various websites."/>
                <ListSkills skills={["Python", "SQL", "pandas", "scikit-learn"]}/>
                <br />
                <a href="https://lowellinstruments.com/">
                    <img src={lowell}  alt="lowell" id="icon"/>
                </a>
                <ListItem title="Lowell Instruments LLC" year="Summer 2018" position="Software Engineering Intern" description="Designed and implemented the primary graphical user interface for oceanographic data collection and analysis."/>
                <ListSkills skills={["Python", "PyQt", "Raspberry Pi"]}/>
                <br /><br />
                <h1 className="section-heading">Teaching Experience</h1>
                <hr className="divider"/>
                <a href="https://www.mit.edu/">
                    <img src={mit}  alt="mit2" id="icon"/>
                </a>
                <ListItem title="Massachusetts Institute of Technology" year="Spring 2021" position="Undergraduate Teaching Assistant" location="Cambridge, MA" description="6.033: Computer Systems Engineering"/>
                <br />
                <a href="https://www.inspiritai.com/">
                    <img src={inspirit}  alt="inspirit" id="icon"/>
                </a>
                <ListItem title="Inspirit AI" year="Winter 2020 - present" position="Tutor" description="Tutored high school students in Artificial Intelligence"/>
            </div>
        </div>
    )
}

export default Experience
