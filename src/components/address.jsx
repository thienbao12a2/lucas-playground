import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useRef } from "react";
import side from "../side.jpg";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register";
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
            <h2 className="title-style">Cumming, GA</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h3 className="elementor-heading-title elementor-size-default">
              STORE INFO
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <strong className="list-text mt-3">
              1515 Redi Road, Cumming, GA 30040
            </strong>
            <strong className="list-text mt-3">678-965-6868</strong>
            <strong className="list-text mt-3">
              cumming@catchairparty.com
            </strong>
          </div>
          <div className="col-6">
            <strong>
              <h4 className="list-text mt-3">Store Hours</h4>
            </strong>
            <span className="list-text mt-3">Open 7 days a week:</span>
            <span className="list-text mt-3">Monday – Sunday : 11am – 6pm</span>
          </div>
        </div>

        <div className="row">
          <div className="mt-5">
            <h1>Admission</h1>
          </div>
          <div className="col-6 mt-5">
            <h2 className="title ">Walk In Play Pricing</h2>
            <ul className="points mt-3">
              <li>Walk-ins are always welcome during normal business hours.</li>
              <li>
                Children under 1: $5.99 ($6.99 on weekends) * Free with paid
                sibling.
              </li>
              <li>
                Children 1 to 2 : $9.99 ($11.49 on weekends & holidays) plus
                tax.
              </li>
              <li>
                Children 3 to 12: $12.99 ($14.49 on weekend & holidays) plus
                tax.
              </li>
              <li>One free adult per paid child. Additional adults $3.99</li>
            </ul>
            <Link to="/register">
              <Button className="btn">FILL OUT WAIVER</Button>
            </Link>
          </div>
          <div className="col-6 mt-5">
            <img src={side} />
          </div>
        </div>

        <div className="row margin-t">
          <div className="col-md-2"></div>
          <div className="col-md-10"></div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Note</th>
                <th scope="col">Weekend</th>
                <th scope="col">Weekdays</th>
                <th scope="col">private Party</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Upto 8 years</td>
                <td>100$</td>
                <td>300$</td>
                <td>400$</td>
              </tr>
              <tr>
                <td>Upto 14 years</td>
                <td>500$</td>
                <td>400$</td>
                <td>600$</td>
              </tr>
            </tbody>
          </table>
          <div className="row mt-7">
            <div className="col-md-5"></div>
            <div className="col-md-3">
              <Link to="/party">
                <Button className="btn">Book a Party</Button>
              </Link>
            </div>
            <div className="col-md-3"> </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
