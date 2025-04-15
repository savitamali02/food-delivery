import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Section7() {
  return (
    <section className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                 <Col sm={8} className='text-center'>
                 <h4>We Gurantee</h4>
                 <h2>30 Minutes Delivery</h2>
                 <p>Craving a juicy burger? We’ve got you covered! Order now and enjoy hot, freshly made burgers delivered to your doorstep in just 30 minutes — satisfaction and speed, guaranteed.</p>
              <Link to="tel:999-888-7777" className='btn btn_red px-4 py-2 rounded-0'>
                 Call : 999-888-7777
              </Link>
                 </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section7;
