import "./App.css";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Membership(prop) {
  const { state } = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(state);
  const handleClick = (props) => {
    setIsSubmitted(false);
    if (props == true) {
      alert(isSubmitted);
    } else {
      alert("no false");
    }
  };
  return (
    <div>
      <Header isSubmitted={state} />
      <div className="mt-4 App justify-content ">
        <a className="logout-link" onClick={() => handleClick(state)}>
          Logout
        </a>
        <h1>Membership Screen</h1>
      </div>
    </div>
  );
}

export default Membership;
