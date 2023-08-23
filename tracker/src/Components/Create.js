import axios from "axios";
import './Create.css';
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://64e3ec43bac46e480e794ca8.mockapi.io/crud1", {
        name: name,
        email: email,
        date: date,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
    <div className="form">
          <div className="form-body"></div>
      <div className="d-flex justify-content-between m-2">
        <h2>Add Expense</h2>
        <Link to="/read">
          <button className="btn btn-info">Show Data</button>
        </Link>
    
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Expense Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>


        <button
          type="submit"
          className="btn btn-info"
          onClick={handleSubmit}
        >
          Add 
        </button>
      </form>
      </div>
    </>
  );
};

export default Create;
