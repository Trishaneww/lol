import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import digitalwealth from '../../images/digital-wealth-ss.png';
import teagram from '../../images/teagram.png';
import notewizard from '../../images/notewizard.png';
import weatherwizard from '../../images/weatherwizard.png';
import texteditor from '../../images/texteditor.png';
import githublink from '../../images/github.png';
import githublinkin from '../../images/githubinvert.png';
import websitelink from '../../images/website.png';
import websitelinkin from '../../images/websiteinvert.png';

export default function Portfolio() {
  return (
    <Carousel fade id="cssCarousel">
      <Carousel.Item  >
        <img
          className = "project-img"
          src={digitalwealth}
          alt="First slide"
        />
        <Carousel.Caption>
          <a href="https://digital-wealth.netlify.app/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/Trishaneww/Digital-Wealth">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  >
        <img
          className = "project-img"
          src={teagram}
          alt="First slide"
        />
        <Carousel.Caption>
          <a href="https://tea-gram.herokuapp.com/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/EsraWameed/teagram">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "project-img"
          src={notewizard}
          alt="Second slide"
        />
        <Carousel.Caption>
        <a href="https://notewizard.herokuapp.com/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/Trishaneww/note-wizard">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "project-img"
          src={weatherwizard}
          alt="Third slide"
        />
        <Carousel.Caption>
        <a href="https://trishaneww.github.io/weather-wizard/">
            <img id="link" src={websitelink}/>
          </a>
          <a href="https://github.com/Trishaneww/weather-wizard">
            <img id="link" src={githublink}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "project-img"
          src={texteditor}
          alt="Forth slide"
        />
        <Carousel.Caption>
        <a href="https://texteditor-fordev.herokuapp.com/">
            <img id="link" src={websitelinkin}/>
          </a>
          <a href="https://github.com/Trishaneww/text-editor">
            <img id="link" src={githublinkin}/>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};
