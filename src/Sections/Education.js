import React from 'react'
import ListItem from '../Components/ListItem'

import mit from "../Images/logos/mit.png"


function Education() {
    return (
        <div className="education-section" id="education">
            <div id="section-wrapper">
                <h1 className="section-heading">Education</h1>
                <hr />
                <a href="https://www.mit.edu/">
                    <img src={mit}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Massachusetts Institute of Technology" year="2021 - 2022" position="Computer Science, M.S. Candidate" location="Cambridge, MA" gpa="N/A"/>
                <br></br>
                <a href="https://www.mit.edu/">
                    <img src={mit}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Massachusetts Institute of Technology" year="2017 - 2021" position="Computer Science, B.S." location="Cambridge, MA" gpa="4.8/5.0"/>
            </div>
        </div>
    )
}

export default Education
