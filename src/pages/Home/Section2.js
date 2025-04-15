import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";
import '../../styles/Section2.css'; // 👈 Import the CSS for flip effect

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Our dishes are crafted using authentic, time-tested recipes passed down through generations. We pride ourselves on originality, quality, and flavor.`,
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: `We serve only the highest quality food, made from fresh, handpicked ingredients every day. We believe in real food — no preservatives, no artificial flavors. Just pure, high-quality ingredients made with care.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `We know you’re hungry — that’s why we deliver your favorite meals lightning-fast, without compromising on quality.`,
  },
];

function Section2() {
  return (
    <>
      <section className='about_section'>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className='text-center'>
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>Burgers come in countless variations, with different types of meat, cheese, sauces, and toppings, allowing for a wide range of flavors and preferences.</p>
              <Link to="/menu" className='btn order_now btn_red'>
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="about_icon">
                        <img src={cardData.image} className="img-fluid" alt="icon" />
                      </div>
                      <h4>{cardData.title}</h4>
                    </div>
                    <div className="flip-card-back">
                      <p>{cardData.paragraph}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section2;
