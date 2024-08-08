import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import "./index.css";
import App from "./App";

const yearContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <yearContext.Provider>
      <App />
    </yearContext.Provider>
  </Router>
);
