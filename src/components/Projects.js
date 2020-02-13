import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import linkedInIcon from '../assets/linkedin-brands.svg'
import data from '../data/data.js';
import Card from '../components/Card';
import '../css/projects.css'


function Project() {
    // const [visibility, setVisibilty] = useState(true);
    const [currentCard, setCurrentCard] = useState(data.properties[0]);
    function nextCard() {
        let i = data.properties.indexOf(currentCard);
        if (i + 1 > data.properties.length - 1) {
            i = 0
        } else {
            i++
        }
        setCurrentCard(data.properties[i]);
    };
    function previousCard() {
        let i = data.properties.indexOf(currentCard);
        if (i === 0) {
            i = data.properties.length - 1;
        } else {
            i--
        }
        setCurrentCard(data.properties[i]);
    };

    return (
        <div className="project-wrapper">
            <div className="section-wrapper">
                <button className="btn" onClick={() => previousCard()}>&#60;</button>
                <div className="projectSlider">
                    <TransitionGroup component={null}>
                        <CSSTransition
                            key={currentCard.id}
                            timeout={300}
                            classNames="fade"
                        >
                            <Card card={currentCard}></Card>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <button className="btn" onClick={() => nextCard()}>&#62;</button>
            </div>
            <footer>
                <div className="footer-contactContainer">
                    <p style={{ fontWeight: 'bold' }}>Contact</p>
                    <p style={{ fontSize: 12, opacity: 0.8 }}>r.alite@posteo.de</p>
                    <p style={{ fontSize: 12, opacity: 0.8 }}>Berlin, DE</p>
                </div>
                <div className="footer-imgContainer">
                    {/* <a href="/../assets/cv.pdf" download><button className="downloadButton">cv</button></a> */}
                    <a href="https://github.com/ReyAlite" target="_blank" rel="noopener noreferrer"><img src={data.properties[0].icons[3]} alt="git-icon"></img></a>
                    <a href="https://www.linkedin.com/in/rey-alite-445669179/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="linkedIn-icon"></img></a>
                </div>
            </footer>
        </div>
    );
}
export default Project;