import React from 'react'
import logo from '../../images/t-logo.png';
import reactlogo from '../../images/react-logo.png';
import htmllogo from '../../images/html-logo.png';
import javascriptlogo from '../../images/javascript-logo.png';
import csslogo from '../../images/css.png';
import expresslogo from '../../images/node-logo.png';
import mongologo from '../../images/mongo-logo.png'

export default function About() {
  return (
    <p className="about">
      <h1>Trishane Wijeyawickrema</h1>
   Fullstack Web Developer.
   I have always been fascinated by technological solutions to problems and have a strong passion towards developing unique and useful software applications.
   Based in Vancouver, Canada.
   <img  src={logo} width="310" height="310"/>
   <h1 className='tech'>Technological Experience</h1>
   <p>
    React. MongoDB. Node. Express. Javascript. CSS. HTML.
   </p>
   <div className='technologies'>
    <img  src={reactlogo} width="120" height="120"/>
    <img  src={mongologo} width="170" height="120"/>
    <img  src={expresslogo} width="130" height="120"/>
    <img  src={javascriptlogo} width="100" height="120"/>
    <img  src={csslogo} width="100" height="120"/>
    <img  src={htmllogo} width="160" height="140"/>
   </div>
</p>
  )
}
