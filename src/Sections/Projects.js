import React from 'react'
import GridItem from '../Components/GridItem'

import wp from "../Images/projects/water_polo.jpg"
import launcher from "../Images/projects/launcher.JPG"
import listy from "../Images/projects/listy.png"
import onesong from "../Images/projects/spotify.webp"
import hackduke from "../Images/projects/hackduke.png"



function Projects() {
    return (
        <div className="projects-section" id="projects">
            <div className="container" id="section-wrapper">
                <h1 className="section-heading">Projects</h1>
                <hr className="divider" />
            </div>
            <div className="container" id="projects-section-wrapper">
                <div className="projects-container">
                    <div className="column">
                        <GridItem title="Water Polo Analytics" description="conducted the data analytics for Champions League Water Polo Tournament to evaluate successful plays and wrote a paper sharing results" github="https://github.com/kevinshen1101/Water-Polo-Analytics" link_text="Github and Paper" image={wp}/>
                        <GridItem title="yt-learn" description="HackDuke2020 Hackathon Project: built frontend for an application that provides a centralized platform to rate Youtube tutorials" github="https://github.com/evankim20/yt-learn" link_text="Github" image={hackduke}/>
                        <GridItem title="One Song a Day" description="built a Go application that queries the Spotify API and sends a song recommendation to my inbox every morning" github="https://github.com/evankim20/one-song-a-day" link_text="Github" image={onesong}/>
                    </div>
                    <div className="column">
                        <GridItem title="Treat Launcher" description="mas.863 final project: built a dog treat launch from scratch with digital fabrication techniques.  Also created a website documenting my work" github="https://fab.cba.mit.edu/classes/863.20/EECS/people/evankim/index.html" link_text="Website" image={launcher}/>
                        <GridItem title="Listy" description="collaborative list web application where users can submit and vote on items in shared lists" github="https://github.com/evankim20/listy" link_text="Github" image={listy}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
