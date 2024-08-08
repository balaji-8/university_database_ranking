// pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./HomePage.css"; // Import the custom CSS file

function HomePage() {
  return (
    <Container className="homepage-container mt-4">
      <h2 className="homepage-title">Welcome to University Data App</h2>
      <p className="homepage-description">
        This application provides information about universities around the
        world for the year 2012. Use the links below to explore different data
        points about universities.
      </p>

      <Row className="homepage-row">
        {/* Card for Top 20 Universities */}
        <Col md={6} lg={4} className="mb-3">
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title className="homepage-card-title">
                Top 20 Universities
              </Card.Title>
              <Card.Text className="homepage-card-text">
                Explore the top 20 universities in the world in 2012.
              </Card.Text>
              <Button
                as={Link}
                to="/top20"
                variant="primary"
                className="homepage-button"
              >
                View Top 20
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Quality of Teachers */}
        <Col md={6} lg={4} className="mb-3">
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title className="homepage-card-title">
                Quality of Teachers
              </Card.Title>
              <Card.Text className="homepage-card-text">
                See universities ordered by quality of faculty.
              </Card.Text>
              <Button
                as={Link}
                to="/teachers"
                variant="primary"
                className="homepage-button"
              >
                View Teachers
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Alumni Employment */}
        <Col md={6} lg={4} className="mb-3">
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title className="homepage-card-title">
                Alumni Employment
              </Card.Title>
              <Card.Text className="homepage-card-text">
                Explore universities ordered by alumni employment.
              </Card.Text>
              <Button
                as={Link}
                to="/alumni"
                variant="primary"
                className="homepage-button"
              >
                View Alumni
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Citations */}
        <Col md={6} lg={4} className="mb-3">
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title className="homepage-card-title">Citations</Card.Title>
              <Card.Text className="homepage-card-text">
                See universities ordered by citations.
              </Card.Text>
              <Button
                as={Link}
                to="/citations"
                variant="primary"
                className="homepage-button"
              >
                View Citations
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card for Quality of Education */}
        <Col md={6} lg={4} className="mb-3">
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title className="homepage-card-title">
                Quality of Education
              </Card.Title>
              <Card.Text className="homepage-card-text">
                Explore universities ordered by quality of education.
              </Card.Text>
              <Button
                as={Link}
                to="/education"
                variant="primary"
                className="homepage-button"
              >
                View Education
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
