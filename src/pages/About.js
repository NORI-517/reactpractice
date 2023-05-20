import React from 'react'
import barberAbout from '../assets/barberAbout.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div
                className='aboutTop'
                style={{ backgroundImage: `url(${barberAbout})` }}
            ></div>
            <div className='aboutBottom'>
                <h1> ABOUT US</h1>
                <p>
                    Founded in 2005, Classic Cuts Barber Shop has become a community staple.
                    We're not just barbers; we're craftspeople dedicated to maintaining traditions of barbering while infusing modern styles.
                    Our professionals, armed with knowledge, skill, and a warm smile, strive to provide unparalleled service.
                    We specialize in all hair types and cuts - from classic to contemporary.
                    Our quaint, welcoming shop is a place for relaxation, camaraderie, and transformation, where we respect every client's unique style.
                    We aim to ensure you leave not just with an excellent haircut, but with a renewed sense of confidence.
                    Visit us today, and experience the Classic Cuts difference.
                </p>
            </div>
        </div>
    )
}

export default About