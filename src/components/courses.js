import React from "react";
import Header from "./header";
import "../Courses.css";
import "../Footer.css";

const Courses = () => {
  const courseList = [
    "Software Engineering",
    "Computer Network",
    "Database",
    "System Level Programming",
    "Compiler Design",
    "Operating System",
    "Computer Architecture",
    "Web Programming",
    "DataStructure",
    "Algorithm",
  ];

  return (
    <div>
      <Header />

      <div className="courses">
        <h1>Courses Taken</h1>
        <ul>
          {courseList.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      <div className="foot container-fluid footer">
        2022 copyright &copy; All Rights Reserved
      </div>
    </div>
  );
};

export default Courses;
