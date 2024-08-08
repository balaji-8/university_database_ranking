import React, { useState, useContext } from "react";
//import { Navbar, Nav, Container } from 'react-bootstrap';
//import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"; // Import the custom CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import YearContext from "../YearContext";

export default function AppNavbar() {
  //const [expanded, setExpanded] = useState(false);
  const { year, setYear } = useContext(YearContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        University Data App
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/top20">
              Top 20
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/teachers">
              Teachers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/alumni">
              Alumni
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/citations">
              Citations
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/education">
              Education
            </a>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <div className="input-group">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search By Year"
              aria-label="Search"
              value={year}
              onChange={(e) => onYearChange(parseInt(e.target.value))}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </form> */}
        <FormControl
          type="number"
          placeholder="Enter year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="year-input"
        />
      </div>
    </nav>
  );
}
