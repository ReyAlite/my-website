import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
// import profileImg from '../assets/profil.jpg'
import '../css/about.css'

const txt =
    `I’m 23 years old and currently studying International Media and Computer Science at the Hochschule für Technik und Wirtschaft, Berlin. 
    During my studies I was able to gather a wide variety of basic knowledge about many technologies. I also got introduced to multiple progamming languages and concepts.
    Through an internship I did last year and my univesity's practical semester, I was able to gain practical experiences in real working environments. 
    I feel most comfortable coding for the web and I'm looking forward to start working in a company, to strengthen my knowledge from university and learn more about web technologies.

    I am an open minded person, thoughtful and dutiful. I like solving problems and although it can be frustrating, I am curious about finding
    reasons behind them, to hopefully avoid them in the future. 
    `

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
                </div>
                <div style={{ width: '100%', height: '0', alignSelf: 'flex-end', paddingBottom: 50 }}>
                    <button className="scroll-btn" onClick={() => window.scrollBy(0, window.innerHeight + 60)}>&or;</button>
                </div>
            </div>
        </div>
    );
}

export default About;