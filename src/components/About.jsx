import React from "react";

const About = () => {
  const year = new Date(Date.now()).getFullYear();

  return (
    <div className="aboutContainer">
      <h1>Amr Ashraf Mahmoud</h1>
      <p>
        I'm a software engineer with a passion for technology and design. I've
        worked on various projects, including web development, mobile app
        development, UI/UX design, and IoT engineering.
      </p>

      <span>© {year} CPIT405-Lab9 from Amr Mahmoud</span>
    </div>
  );
};

export default About;
