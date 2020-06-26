import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
// import profileImg from '../assets/profil.jpg'
import { dataSet } from '../data/data.js';
import '../css/about.css';

const txt = dataSet.text.aboutText;
const projectTxt = dataSet.text.projectsText;


function About() {
    const [flipped, setFlip] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <div className="background-wrapper">
            <div className="section-wrapper">
                <div className="profileImg-container" onClick={() => setFlip(state => !state)}>
                    <a.div class="c front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                    <a.div class="c back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                        <p className="bkgrndTxt">Lissabon</p>
                        <p className="bkgrndTxt">19. April 2019</p>
                    </a.div>
                </div>
                <div className="aboutTxt-container">
                    <span>{txt}</span>
                    <p>{projectTxt}</p>
                    
                </div>
                <div style={{ width: '100%', height: '0', alignSelf: 'flex-end', paddingBottom: 50 }}>
                    <button className="scroll-btn" onClick={() => window.scrollBy(0, window.innerHeight + 60)}>&or;</button>
                </div>
            </div>
        </div>
    );
}

export default About;