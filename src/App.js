import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Address from "./components/address";
import Register from "./components/register";
import Party from "./components/party";
import Login from "./Login";
import RegisterUser from "./RegisterUser";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App justify-content ">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" render={<Address />}>
            <Route exact path="/" element={<Address />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/party" element={<Party />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register-user" element={<RegisterUser />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div className="mt-5 foot container-fluid mt-4">
        2022 copyright &copy; All Rights Reserved
      </div>
    </div>
  );
}

export default App;
