import reactIcon from '../assets/react-brands.svg';
import vueIcon from '../assets/vuejs-brands.svg';
import jsIcon from '../assets/js-brands.svg';
import javaIcon from '../assets/java-brands.svg';
import cssIcon from '../assets/css3-brands.svg';
import htmlIcon from '../assets/html5-brands.svg';
import gitIcon from '../assets/git-brands.svg';
import figmaIcon from '../assets/figma-brands.svg';
import pythonIcon from '../assets/python-brands.svg';
import swiftIcon from '../assets/swift-brands.svg';
import sassIcon from '../assets/sass-brands.svg'

const dataSet = {
    "properties": [
        {   
            "id": 0,
            "title": "Projekt Elektronischer Führerschein",
            "intro": 
            `During my 5th semester me and a group of students worked together with the company BearingPoint, to develop a two sided mobile application that, 
            on the one side allows users to store their car, boat or pilot licence and on the other side makes it possible for authorities, 
            (police officer, car rental office...), to scan and verify one's licence. 
            We worked with React-Native to develop a cross-platform solution for Android and iOS devices.
            I was responsible for the design and part of the frontend team.`,
            "image": "",
            "roles": ["Design", "Frontend"],
            "icons": [reactIcon, jsIcon, figmaIcon, gitIcon]
        },
        {
            "id": 1,
            "title": "Frontend Internship",
            "intro": 
            `As part of my study I spent five months abroad working for TourScanner, a StartUp based in the heart of Lisbon. 
            During that time I was able to gain experience in a real working and fast paced StartUp environment. 
            I worked on features and issues of the website, improving user experience and the StartUp’s web appearance.
            We used gitLab for version control and also to communicate tickets and issues. I had the flexibility to work both 
            from home or the office.`,
            "image": "",
            "roles": ["Frontend", "Testing"],
            "icons": [vueIcon, jsIcon, sassIcon, gitIcon]
        },
        {
            "id": 2,
            "title": "University Courses",
            "intro": 
            `During my time at university I was able to gain a basic but a wide range of knowledge about different technologies.
            I have worked on software as well as web projects, and I was introduced to multiple programming languages. 
            I have visited courses about Web Development, Visual Computing, iOS Development and digital Media. 
            I have gathered valuable knowledge about Computer Science in general.`,
            "image": "",
            "roles": ["Student"],
            "icons": [javaIcon, swiftIcon, pythonIcon, htmlIcon, cssIcon]
        },
    ], 
    "text" :
        {
            "aboutText" : 
                    `I am 24 years old and currently living in Berlin, Germany. 
                    During my studies I was able to gather a wide range of knowledge about web technologies. I also got introduced to multiple programming languages and programming concepts.
                    Last year, I did an internship in a startup based in Lisbon, where I worked as a frontend developer and was able to gain practical experiences. 
                    Using web technologies like HTML/CSS and JavaScript is nothing new to me and I also came in touch with modern web frameworks like Vue.js, React and Bootstrap.\

                    I am an open-minded person, thoughtful, dutiful and creative. I like solving problems and improving things. In the future I'm looking forward strengthening my knowledge of
                    modern web technologies and also seriously learn about design.`, 
            "projectsText" : 
                    `Please feel free to take a look at the projects I have been working on.`
                    
        }
}

export {dataSet};
export default dataSet;