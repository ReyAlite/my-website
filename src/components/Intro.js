// <Typed/> components to crate a neat landing page. 

import React, { useState } from 'react';
import '../css/intro.css';
import Typed from 'react-typed';

function Intro() {
  const phrases = {
    head: 'This is my portfolio.',
    intro: 'I&apos;m currently studying International Media and Computer Science at the HTW-Berlin and working on my bachelor thesis.',
    main: 'I&apos;m passionate about web development and especially about creative, user centered design.'

  }
  const [visibility, setVisibility] = useState(false);

  return (
    <div className="section-wrapper">
      <div className="intro-container">
        <Typed
          className="typedText"
          showCursor={false}
          strings={['Hi,']}
          typeSpeed={60}
          startDelay={1000}
        />
        <br></br>
        <Typed
          className="typedText"
          strings={['I&apos;m Rye', 'I&apos;m Rey.']}
          smartBackspace={true}
          showCursor={false}
          backSpeed={30}
          backDelay={0}
          startDelay={1800}
          typeSpeed={90}
        />
      </div>
      <div className="txt-container">
        <Typed
          className="typed-h1"
          showCursor={false}
          strings={[phrases.head]}
          startDelay={3500}
          typeSpeed={30}
        />
        <br></br>
        <Typed
          className="typed-intro"
          showCursor={false}
          strings={[phrases.intro]}
          startDelay={5000}
          typeSpeed={20}
        />
        <br></br>
        <Typed
          className="typed-main"
          showCursor={false}
          strings={[phrases.main]}
          startDelay={9000}
          typeSpeed={20}
          onComplete={() => setVisibility(true)}
        />
      </div>
      <div style={{ width: '100%', height: '0', alignSelf: 'flex-end', paddingBottom: 50 }}>
        {visibility ? (
            <button className="scroll-btn" onClick={() => window.scrollBy(0, window.innerHeight)}>&or;</button>
        )
          : (<span></span>)}
      </div>
    </div>
  );
}

export default Intro;
