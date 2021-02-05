import React from 'react'
import ListItem from '../Components/ListItem'

import mit from "../Images/logos/mit.png"


function Education() {
    return (
        <div className="education-section" id="education">
            <div id="section-wrapper">
                <h1 className="section-heading">Education</h1>
                <hr className="divider"/>
                <a href="https://www.mit.edu/">
                    <img src={mit}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Massachusetts Institute of Technology" year="2021 - 2022" position="Computer Science, M.S. Candidate" location="Cambridge, MA" gpa="N/A" description="Relevant Courses: Machine Learning for Healthcare, Distributed Systems (in progress), Computer Vision (in progress)"/>
                <br></br>
                <a href="https://www.mit.edu/">
                    <img src={mit}  alt="Headshot" id="icon"/>
                </a>
                <ListItem title="Massachusetts Institute of Technology" year="2017 - 2021" position="Computer Science, B.S." location="Cambridge, MA" gpa="4.8/5.0" description="Relevant Courses: Software Construction, Computer Systems Engineering, Design and Analysis of Algorithms, Computation Structures, Machine Learning, Artificial Intelligence, Computational Cognitive Science, Linear Algebra, Mathematics for Computer Science, How to Make Almost Anything"/>
            </div>
        </div>
    )
}

export default Education
