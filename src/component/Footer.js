import React from 'react';
import linkedin from '../images/linkedin.png';
import githublinkin from '../images/githubinvert.png';
export default function Footer() {
  return (
    <div className="footer">
          <a href="https://github.com/Trishaneww">
            <img id="linkgit" src={githublinkin}/>
          </a>
          <a href="https://www.linkedin.com/in/tw11">
            <img id="linkin" src={linkedin}/>
          </a>
    </div>
  )
};
