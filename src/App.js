import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./components/address";
import Party from "./components/party";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Courses from "./components/courses";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Blog from "./components/blog";

function App() {
  return (
    <div className="App justify-content">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" render={<Address />}>
            <Route exact path="/" element={<Address />} />
            <Route exact path="/my-resume" element={<Resume />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
