import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgVideo from '../../assets/shop/video1.mp4'; // Adjust path to your video file

function Section1() {
  return (
    <section className="hero_section">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="video_bg">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="hero_overlay d-flex align-items-center justify-content-center text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="hero_text ">
                <h1>New Burger</h1>
                <h2 className='text-black'>With Onion</h2>
                <p className="pt-2 pb-4">
                  Burgers come in countless variations, with different types of meat, cheese, sauces, and toppings, allowing for a wide range of flavors and preferences.
                </p>
                <Link to="/Menu" className="btn order_now">
                  Order Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Section1;
