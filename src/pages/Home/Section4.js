import React from 'react'
import { Container,Row ,Col } from 'react-bootstrap';
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
   <>
      <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                 <img src={PromotionImage} className='img-fluid' alt="Promotion"/>
                </Col>
                <Col lg={6} className='px-5'>
                <h2>Nothing brings people together like a good burger</h2>
                <p>Our Crazy Burger is more than just a meal — it’s a moment shared.
Crafted with juicy patties, fresh toppings, and bold flavors that satisfy.
Perfect for friends, families, and anyone who loves real, quality food.
Take a bite, make a memory, and enjoy the taste that connects us all.
               </p>
               <ul>
                <li>
                    <p>
                    Whether it's friends hanging out or family dinner time,
our burgers bring smiles to every table.
                    </p>
                </li>
                <li>
                    <p>
                    Every patty is grilled to juicy perfection,
layered with care and packed with flavor.

                    </p>
                </li>
                <li>
                    <p>
                    A bold mix of fresh ingredients and secret sauces,
creating a burger experience like no other.
                    </p>
                </li>
               </ul>
                </Col>
            </Row>
        </Container>
      </section>

      {/* BG parallex scroll */}
      <section className='bg_parallax_scroll'>
        
      </section>

   </>
  )
}

export default Section4;
