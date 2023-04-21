import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useRef } from "react";
import side from "../side.jpg";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./resume";
import Header from "./header";
import Slider from "./slider";

function Address() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Slider />
      <div className="row">
        <div className="col-12 mt-5">
          <div className="banner-wraper-post">
            <h2 className="title-style">Bao Ton</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="elementor-heading-title elementor-size-default">
              My Info
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <strong className="list-text mt-3">
              105 Henson Farm Dr, Loganville GA 30047
            </strong>
            <strong className="list-text mt-3">678-409-0605</strong>
            <strong className="list-text mt-3">
              baothatthienton@yahoo.com
            </strong>
            <strong className="list-text mt-3">npm baoton</strong>
          </div>
          <div className="col-6">
            <strong>
              <h4 className="list-text mt-3">Georgia State University</h4>
            </strong>
            <span className="list-text mt-3">Computer Science Senior</span>
            <span className="list-text mt-3">Graduation: May 2023</span>
          </div>
        </div>

        <div className="row">
          <div className="mt-5">
            <h1>About Me</h1>
          </div>
          <div className="col-6 mt-5">
            <h2 className="title ">Glad to see you here!</h2>
            <ul className="points mt-3">
              <li>
                Analytical professional and student with a donation of knowledge
                and experience in software engineering, systems implementation,
                requirements analysis, and computer science
              </li>
              <li>
                Demonstrates a deep passion for developing and implementing a
                wide range of systems and platforms to enhance company success
                and growth. Skilled in aligning project goals with technology
                solutions that drive project success.
              </li>
              <li>
                Well-spoken team player, bilingual in English and Vietnamese.
              </li>
            </ul>
          </div>
          <div className="col-6 mt-5">
            <img
              alt="bao-ton"
              src="https://bao-ton.s3.amazonaws.com/Screenshot+2023-04-17+012710.png"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 foot container-fluid mt-4">
        2022 copyright &copy; All Rights Reserved
      </div>
    </div>
  );
}

export default Address;
