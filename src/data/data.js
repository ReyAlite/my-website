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
import sassIcon from '../assets/sass-brands.svg';
import langcount from '../assets/lang-count.gif';

const data = {
    "properties": [
        {   
            "id": 0,
            "title": "Projekt Elektronischer Führerschein",
            "txt": 
            `During my 5th semester me and a group of students worked together with the company BearingPoint, to develop a two sided mobile application that, 
            on the one side allows users to store their car, boat or pilot licence and on the other side makes it possible for authorities, 
            (police officer, car rental office...), to scan and verify one's licence. 
            We worked with React-Native to develop a cross-platform solution for Android and iOS devices.
            I was responsible for the design and part of the frontend team.`,
            "img": "",
            "roles": ["Design", "Frontend"],
            "icons": [reactIcon, jsIcon, figmaIcon, gitIcon]
        },
        {
            "id": 1,
            "title": "Frontend Internship",
            "txt": 
            `As part of my study I spent five months abroad working for TourScanner, a StartUp based in the heart of Lisbon. 
            During that time I was able to gain experience in a real working and fast paced StartUp environment. 
            I worked on features and issues of the website, improving user experience and the StartUp’s web appearance.
            We used gitLab for version control and also to communicate tickets and issues. I had the flexibility to work both 
            from home or the office.`,
            "img": [langcount],
            "roles": ["Frontend", "Testing"],
            "icons": [vueIcon, jsIcon, sassIcon, gitIcon]
        },
        {
            "id": 2,
            "title": "University Courses",
            "txt": 
            `During my time at university I was able to gain a basic but a wide range of knowledge about different technologies.
            I have worked on software as well as web projects, and I was introduced to multiple programming languages. 
            I have visited courses about Web Development, Visual Computing, iOS Development and digital Media. 
            I have gathered valuable knowledge about Computer Science in general.`,
            "img": "",
            "roles": ["Student"],
            "icons": [javaIcon, swiftIcon, pythonIcon, htmlIcon, cssIcon]
        },
        
    ]
}

export default data;