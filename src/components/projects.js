import React from "react";
import Header from "./header";
import "../Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Reservation & Online Order System for Restaurants",
      year: "2022",
      description:
        "Utilized JavaScript, React, NodeJS, MongoDB, HTML, CSS, and Bootstrap to create and deploy a highly scalable system to streamline reservation and ordering processes for restaurants.",
    },
    {
      title: "Banking Desktop Application",
      year: "2023",
      description:
        "Facilitated the development and launch of a banking desktop application. Leveraged high attention to detail and analytical skills to optimize system performance and functionality.",
    },
    {
      title: "Book Library",
      year: "2023",
      description:
        "Improved and managed online systems, databases for a professor at Georgia State University. implementing accounts for users to sign up as instructors or students to enable users to download content from the library,- keep track of reading progress, quizzes and resolved a sorting issue which caused the library to display books out of order.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="projects">
        <h1>Selected Projects</h1>
        <div>
          {projectList.map((project, index) => (
            <div key={index} className="project">
              <h2>{project.title}</h2>
              <h3>{project.year}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="foot container-fluid footer">
        2022 copyright &copy; All Rights Reserved
      </div>
    </div>
  );
};

export default Projects;
