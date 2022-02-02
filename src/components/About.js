import React from "react";
import Mocha from "../pics/Mocha.jpg";
import "../style/about.css";

export default function About() {
  return (
    <div className="about">
      <h2 className="about-h2">About Me</h2>
      <div className="bio-myimg">
        {bio}
        <img className="myimg" src={Mocha} alt="" />
      </div>
    </div>
  );
}

let bio = (
  <p className="bio">
    I'm a Software Engineer. My passion for traveling and Tech led me to always
    research my travel plans to enjoy the best experience of a trip. <br />
    My passion for writing and helping others led me to build this website, to
    help you find all the information you need about cities on your bucket list,
    without having to google too much like i did. <br />
    <br />
    Contact me: www.JoeMokhtarAli@gmail.com
  </p>
);
