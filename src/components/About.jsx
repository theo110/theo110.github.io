import React from "react";
import AnimatedPage from "./AnimatedPage";

function About() {
  return (
    <>
    <AnimatedPage>
    <h1>About me</h1>
    <div className="words"> 
      Hi, I'm Theo, a 1st year Mechatronics Engineering student at the University of Waterloo. I am a passionate student looking to learn
      new exciting things about software development. Some of my hobbies include chess, playing video games, as well as reading about history and philosophy.
      Feel free to check out my projects in the "Projects" section or in my GitHub profile.
    </div>
    </AnimatedPage>
    </>
  );
};

export default About;