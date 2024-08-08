// pages/Top20Page.js
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import YearContext from "../YearContext";

function Top20Page() {
  const [universities, setUniversities] = useState([]);
  const { year } = useContext(YearContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/top20/${year}`)
      .then((response) => {
        console.log(response.data);
        setUniversities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [year]);

  return (
    <div>
      <h2>Top 20 Universities in the World ({year})</h2>
      <ul>
        {universities.map((uni, index) => (
          <li key={index}>{uni.institution}</li>
        ))}
      </ul>
    </div>
  );
}

export default Top20Page;
