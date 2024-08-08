let mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

let con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "dbmsProject",
});

con.connect((err) => {
  if (err) return console.error(err.message);
  con.query("SELECT * FROM universities", (err, rows) => {
    if (err) throw err;
    console.log("data received from db:");
  });
  console.log("Connected to the MySQL server.");
});

const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/country/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    'select * from universities where country = "USA" and year= ?',
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/top20/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    "select institution from universities where world_rank <20 and year=?",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/qualityOfTeachers/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    "select institution , quality_of_faculty from universities where year=? order by quality_of_faculty ",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/countryAndNationalRank/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    "select institution , national_rank from universities where country = 'USA'and year=? order by national_rank",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/alumni/:year", (req, res) => {
  const year = req.params.year; // Access the year parameter from the URL

  // Query the database using the year parameter
  con.query(
    "SELECT institution, alumni_employment, country FROM universities WHERE year = ? ORDER BY alumni_employment",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/citations/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    "select institution , citations , country from universities where year = ? order by citations",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/qualityOfEducation/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    "select institution , quality_of_education , country from universities where year=? order by  quality_of_education",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.get("/api/score/:year", (req, res) => {
  const year = req.params.year;
  con.query(
    "select institution , score , country from universities where year=?  order by score desc",
    [year],
    (err, results) => {
      if (err) {
        console.error(err.message);
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
