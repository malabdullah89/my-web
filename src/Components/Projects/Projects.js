import React from 'react'
import './Projects.css'
import DisneyImg from './viewers-disney.png'
 
function Projects() {
    return (
        <div className="project">
            <h4>Projects</h4>
            <div className="project-card">
                <a href="https://disneymohmdev.herokuapp.com/"><img className="disney-logo" src={DisneyImg} /></a>

            </div>
           
        </div>
    )
}

export default Projects
