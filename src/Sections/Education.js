import React from 'react'
import ListItem from '../Components/ListItem'

function Education() {
    return (
        <div className="education-section" id="education">
            <div id="education-wrapper">
                <h1 className="section-heading">Education</h1>
                <ListItem title="Massachusetts Institute of Technology" year="2021 - 2022" position="Artificial Intelligence, M.S. Candidate" location="Cambridge, MA" gpa="N/A"/>
                <ListItem title="Massachusetts Institute of Technology" year="2021 - 2022" position="Computer Science, B.S." location="Cambridge, MA" gpa="4.8/5.0"/>
            </div>
        </div>
    )
}

export default Education
