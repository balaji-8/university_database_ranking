// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Top20Page from "./pages/Top20Page";
import TeachersPage from "./pages/TeachersPage";
import AlumniPage from "./pages/AlumniPage";
import CitationsPage from "./pages/CitationsPage";
import EducationPage from "./pages/EducationPage";
import YearContext from "./YearContext";

function App() {
  const [year, setYear] = useState("");
  return (
    <div>
      <YearContext.Provider value={{ year, setYear }}>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="top20" element={<Top20Page />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/citations" element={<CitationsPage />} />
            <Route path="/education" element={<EducationPage />} />
          </Routes>
        </div>
      </YearContext.Provider>
    </div>
  );
}

export default App;
