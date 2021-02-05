import React from 'react'

function ListItem({title, year, position, gpa, description}) {
    return (
        <div className="list-item">
            <div className="title-label">{title}</div>
            <br className="newline"/>
            <div className="year-label">{year}</div>
            <br></br>
            <div className="position-label">{position}</div>
            <br className="newline"/>
            {gpa == null ? null : <div className="gpa-label">GPA: {gpa}</div>}
            {gpa ? <br /> : <br className="new-newline"/>}
            {description == null ? null : <div className="description-label">{description}</div>}
        </div>
    )
}

export default ListItem
