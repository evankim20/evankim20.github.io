import React from 'react'

function ListItem({title, year, position, location, gpa, description}) {
    return (
        <div className="list-item">
            <div className="title-label">{title}</div>
            <div className="year-label">{year}</div>
            <br></br>
            <div className="position-label">{position}</div>
            <div className="location-label">{location}</div>
            <br></br>
            {gpa == null ? null : <div className="gpa-label">GPA: {gpa}</div>}
            {description == null ? null : <div className="description-label">{description}</div>}
        </div>
    )
}

export default ListItem
