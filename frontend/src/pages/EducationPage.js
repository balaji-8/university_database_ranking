// pages/EducationPage.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import YearContext from "../YearContext";

function EducationPage() {
  const [universities, setUniversities] = useState([]);
  const { year } = useContext(YearContext);

  useEffect(() => {
    // Fetch universities ordered by quality of education for the year 2012
    axios
      .get(`http://localhost:5000/api/qualityOfEducation/${year}`)
      .then((response) => {
        // Set the fetched data in state
        setUniversities(response.data);
      })
      .catch((error) => {
        // Log the error message in case of an error
        console.error("Error fetching data:", error);
      });
  }, [year]);

  return (
    <div>
      <h2>Universities Ordered by Quality of Education ({year})</h2>
      {/* Render a table of universities */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Institution</th>
            <th>Quality of Education</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the list of universities and render each one */}
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.institution}</td>
              <td>{university.quality_of_education}</td>
              <td>{university.country}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EducationPage;
