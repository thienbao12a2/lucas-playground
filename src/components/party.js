import React, { useState, setState } from "react";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DatePicker from "react-date-picker";
import Select from "react-select";
import TimePicker from "react-time-picker";
import "../App.css";
import Background from "../bg-party.png";
import Header from "./header";

function Party() {
  const options = [
    {
      value: "Birthday-Party-Up-to-14-Private",
      label: "Birthday Party - Up to 14 Private",
    },
    {
      value: "Birthday-Party-Up-to-14-Weekday",
      label: "Birthday Party - Up to 14 Weekday",
    },
    {
      value: "Birthday-Party-Up-to-14-Weekday",
      label: "Birthday Party - Up to 14 Weekday",
    },
  ];

  const MyComponent = () => (
    <Select
      id="Peckage"
      onChange={SetPeckage}
      value={Peckage}
      options={options}
    />
  );

  const [Message, setMessage] = useState(null);
  const [Time, TChange] = useState("10:00");
  const [Peckage, SetPeckage] = useState(null);
  const [DateGet, onChange] = useState(new Date());
  const [first_name, fChange] = useState(null);
  const [last_name, lChange] = useState(null);
  const [adults, adultsChange] = useState(null);
  const [childs, childsChange] = useState(null);
  const [address, addressChange] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "first_name") {
      fChange(value);
    }
    if (id === "last_name") {
      lChange(value);
    }
    if (id === "adults") {
      adultsChange(value);
    }
    if (id === "childs") {
      childsChange(value);
    }
    if (id === "address") {
      addressChange(value);
    }
  };

  const handleSubmit = () => {
    console.log("123");
    let obj = {
      first_name: first_name,
      last_name: last_name,
      adults: adults,
      childs: childs,
      DateGet: DateGet,
      Peckage: Peckage,
      Time: Time,
      address: address,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    setMessage("Party Booked Successfully!");
    return update(ref(database), updates);
  };

  return (
    <div>
      <Header />

      <div className="container justify-content">
        <div className="row mt-4">
          <h2>Book a Party</h2>
        </div>

        <div
          className="form"
          style={{ backgroundImage: "url(" + Background + ")" }}
        >
          <div className="form-body">
            {Message ? (
              <div className="alert alert-success" role="alert">
                {Message}
              </div>
            ) : null}

            <div className="username">
              <input
                placeholder="Booker's First Name"
                type="text"
                className="form__label mt-2 form-control"
                id="first_name"
                name="first_name"
                onChange={(e) => handleInputChange(e)}
                value={first_name}
              />
            </div>

            <div className="username">
              <input
                placeholder="Booker's Last Name"
                type="text"
                className="form__label mt-2 form-control"
                id="last_name"
                name="last_name"
                onChange={(e) => handleInputChange(e)}
                value={last_name}
              />
            </div>

            <div className="username">
              <textarea
                placeholder="Booker's Address"
                type="text"
                className="form__label mt-2 form-control"
                id="address"
                name="address"
                onChange={(e) => handleInputChange(e)}
                value={address}
              />
            </div>

            <div className="username col-md-4">
              <input
                placeholder="Number of Adults"
                type="number"
                min="0"
                className="form__label mt-2 form-control"
                id="adults"
                name="adults"
                onChange={(e) => handleInputChange(e)}
                value={adults}
              />
            </div>

            <div className="username col-md-4">
              <input
                placeholder="Number of Childern"
                type="number"
                min="0"
                className="form__label mt-2 form-control"
                id="childs"
                name="childs"
                onChange={(e) => handleInputChange(e)}
                value={childs}
              />
            </div>

            <div className="username">
              <DatePicker
                className="form__label mt-2 form-control"
                id="DateGet"
                onChange={onChange}
                value={DateGet}
              />
            </div>

            <div className="username mt-3">
              <MyComponent />
            </div>
            <div className="username mt-3">
              <TimePicker
                className="form__label mt-2 form-control"
                id="Time"
                onChange={TChange}
                value={Time}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-5"></div>
            <div className="col-md-3">
              <Button
                onClick={() => handleSubmit()}
                type="submit"
                className="btn"
              >
                Book Party
              </Button>{" "}
            </div>
            <div className="col-md-3"> </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Party;
