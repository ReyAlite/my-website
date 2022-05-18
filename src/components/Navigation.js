import React from 'react';
import '../css/navigation.css';
// import Typed from 'react-typed';

const sections = ['About', 'Experience']
const links = sections.map((section) => {
  return (
    <li key={section + '-key'}>
      <a href={'#' + section}>
        {section}
      </a>
    </li>
  )
});

function Navigation() {
  return (
    <div className="nav-wrapper">
      <nav>
        <ul>
          {links}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
