import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import Navigation from './components/Navigation';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import * as serviceWorker from './serviceWorker';


function App(props){
    return(
        <div>
            {/* <Navigation></Navigation> */}
            <Intro></Intro>
            <About></About>
            <Projects></Projects>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
