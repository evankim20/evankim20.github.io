import React from 'react'

function ListSkills( {skills} ) {
    return (
        <div>
            {skills.map((value, index) => {
                return <div className="skill-pill" key={value}>{value}</div>
            })}
        </div>
    )
}

export default ListSkills
