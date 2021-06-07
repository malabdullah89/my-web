import React from 'react'
import './Projects.css'
import DisneyImg from './viewers-disney.png'
import ShahidLogo from './shahid-logo.svg'
 
function Projects() {
    return (
        <div className="project">
            <h4>Projects</h4>
            <div className="project-card">
                <a href="https://disneymohmdev.herokuapp.com/"><img className="disney-logo" src={DisneyImg} /></a>
                
            </div>

            <div className="shahid-card">
                <a href="http://shahidnet.herokuapp.com/"><img className="disney-logo" src={ShahidLogo} /></a>
                
            </div>
           
        </div>
    )
}

export default Projects
