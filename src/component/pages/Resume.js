import React from "react";
import resumepreview from "../../images/resume-preview.png";
import resume from "../pages/FullStackResume.pdf";

export default function Resume() {
  return (
    <div className="resume">
    <h3>Resume</h3>
    <a href={resume} download><img className='resume' src={resumepreview}/></a>
    </div>
  );
}
