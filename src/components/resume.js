import React from "react";
import Header from "./header";
import "../Resume.css";

const Resume = () => {
  return (
    <div>
      <Header />

      <div className="resume">
        <h1>Bao Ton</h1>
        <p>
          Loganville, GA 30052 | 678-409-0605 | bton1@student.gsu.edu |
          github.com/thienbao12a2
        </p>

        <h2>Software Engineer</h2>
        <p>
          Analytical professional and student with a donation of knowledge and
          experience in software engineering, systems implementation,
          requirements analysis, and computer science. Demonstrates a deep
          passion for developing and implementing a wide range of systems and
          platforms to enhance company success and growth. Skilled in aligning
          project goals with technology solutions that drive project success.
          Well-spoken team player, bilingual in English and Vietnamese.
        </p>
        <ul className="knowledge">
          <li>Software Development</li>
          <li>Programming & Coding</li>
          <li>Application Development</li>
          <li>Technical Troubleshooting</li>
          <li>Testing & Bugging</li>
          <li>Software Integration</li>
          <li>System Architecture</li>
          <li>Object-Oriented Programming</li>
          <li>Test-Driven Development</li>
        </ul>
        <h3>Technical Skills:</h3>
        <p>
          Java, Python, JavaScript, React, React-Native, NodeJS, C, Java,
          Python, HTML, CSS, Mac OS, Windows 7 & 10, Unix/Linux Operating
          System, VS Code IDE, GitHub, Android Studio, Microsoft Office (Word,
          Excel, PowerPoint), WordPress
        </p>
        <h3>EDUCATION</h3>
        <p>
          Bachelor of Science in Computer Science, Georgia State University,
          Major GPA: 4.3/4.3, May 2023
        </p>
        <p>
          Relevant Coursework: Compiler Design, Computer ORG & Programming,
          Database System, Operating System, Software Engineering, Algorithm,
          Data Structures, System Level Programming, Web Programming, Computer
          Architecture
        </p>
        <p>Awards & Honors: President’s List 2020-2023, Summa Cum Laude</p>

        <h3>SELECTED PROJECTS</h3>
        <ul>
          <li>
            Reservation & Online Order System for Restaurants, 2022: Utilized
            JavaScript, React, NodeJS, MongoDB, HTML, CSS, and Bootstrap to
            create and deploy a highly scalable system to streamline reservation
            and ordering processes for restaurants.
          </li>
          <li>
            Banking Desktop Application, 2023: Facilitated the development and
            launch of a banking desktop application. Leveraged high attention to
            detail and analytical skills to optimize system performance and
            functionality.
          </li>
          <li>
            Book Library, 2023: Improved and managed online systems, databases
            for a professor at Georgia State University. implementing accounts
            for users to sign up as instructors or students to enable users to
            download content from the library,- keep track of reading progress,
            quizzes and resolved a sorting issue which caused the library to
            display books out of order.
          </li>
        </ul>

        <h3>PROFESSIONAL EXPERIENCE</h3>
        <h4>
          Teaching Assistant & Tutor | Georgia State University, Atlanta, GA
          09/2022 – Present
        </h4>
        <ul>
          <li>
            Provided support to the professor to ensure a safe and stimulating
            educational environment, including reviewing lesson outlines, plans,
            and curricula in assigned areas.
          </li>
          <li>
            Responsible for grading student homework, exam, and quizzes in
            alignment with assigned timelines and schedules.
          </li>
          <li>
            Assisted students with coding problems related to C, Java, Python
            and Web Programming; assisted with debugging programs by providing
            education on best practices and error resolution.
          </li>
        </ul>

        <h4>
          Software Engineer Intern | Skipli, Atlanta, GA 05/2022 – Present
        </h4>
        <ul>
          <li>
            Supported the software development life cycle (SDLC) for an android
            application to gather online-pickup orders for restaurants;
            leveraged JavaScript, React, React-Native, HTML, and CSS to improve
            functionality.
          </li>
          <li>
            Key role in enhancing application performance and user satisfaction
            by identifying bugs, developing innovative solutions to resolve
            issues, and adding new features.
          </li>
        </ul>

        <h4>
          Technical Support Specialist | MAC USA, Norcross, GA 09/2019 – 12/2020
        </h4>
        <ul>
          <li>
            Delivered technical support to 50-100 business clients daily,
            deploying strong problem-solving skills to resolve complex hardware
            and software-related issues and increase client satisfaction.
          </li>
          <li>
            Assisted with project management and execution, including leading
            the design and development of e-commerce websites for 20 clients to
            expand brand awareness and online presence.
          </li>
          <li>
            Key role in maintaining open communication with 10 clients per month
            to manage equipment maintenance requests by submitting service
            tickets and coordinating the return of defective equipment to the
            warehouse.
          </li>
        </ul>
      </div>
      <div className="mt-5 foot container-fluid mt-4">
        2022 copyright &copy; All Rights Reserved
      </div>
    </div>
  );
};
export default Resume;
