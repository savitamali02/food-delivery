import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Footer() {
//scroll stste
  const[isVisible, setVisible] =useState(false);
  const scrollTop = () =>{
    window.scrollTo({
       top:0,
       behavior:"smooth",
    });
  };

  const [scrollPercent, setScrollPercent] = useState(0);

  const listenToScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.round((scrollTop / winHeight) * 100);
    setScrollPercent(scrolled);
    setVisible(scrollTop > 150); // show only after scrolling a bit
  };
  
   const currentYear = new Date().getFullYear();


   useEffect(()=>{
    window.addEventListener("scroll",listenToScroll );
   })
  return (
    <>
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className='text-right'>
            <h5>Location</h5>
            <p>Samir Complex,</p>
            <p> Ramnagar, </p>
            <p>Pune.</p>
          </div>
          </Col> 
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className='text-right '>
            <h5>Working Hours</h5>
            <pre>Mon-Fri   : 09:00AM - 10:00PM</pre>
            <pre>Saturday : 09:00AM - 11:00PM</pre>
            <pre>Sunday   : 12:00PM - 09:00PM</pre>
          </div>
          </Col> 
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className='text-right'>
            <h5>Order Now</h5>
            <p> Tasty Burger</p>
            <p><Link to="tel:999-888-7777" className='calling'>
            <i className="bi bi-telephone-fill"></i>
               999-888-7777
            </Link></p>
          </div>
          </Col> 
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
          <div className='text-right'>
            <h5>Follow Us</h5>
            <p>Tasty Burger</p>
            <ul className='list-unstyled text-right mt-2' id="icon">
              <li>
                <Link to="https://www.facebook.com" target="_blank" className='icons'>
                <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com" className='icons' target='_blank'>
                <i className='bi bi-twitter'></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com" className='icons'target='_blank'>
                <i className='bi bi-instagram'></i>
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com" className='icons'target='_blank'>
                <i className='bi bi-youtube'></i>
                </Link>
              </li>
            </ul>
          </div>
          </Col> 
        </Row>
        <Row className='copy_right'>
          <Col>
          <div>
          <ul className='list-unstyled text-center mb-0'>
  <li>
    <Link to="/" className='icons'>
      © {currentYear} <span>TASTY BURGER </span>. All Rights Reserved.
    </Link>
  </li>
  <li>
    <Link to="/about" className='icons'>
      About Us
    </Link>
  </li>
  <li>
    <Link to="/" className='icons'>
      Terms Of Use
    </Link>
  </li>
  <li>
    <Link to="/" className='icons'>
      Privacy Policy
    </Link>
  </li>
</ul>

          </div>
          </Col>
        </Row>
      </Container>
    </footer>

    {/* scroll to top */} 
    {isVisible && (
  <div className="scroll_top_circle" onClick={scrollTop}>
    <div
      className="scroll_progress"
      style={{
        background: `conic-gradient(#f7be27 ${scrollPercent}%, rgba(255,255,255,0.1) ${scrollPercent}% 100%)`
      }}
    >
      <i className="bi bi-arrow-up"></i>
    </div>
  </div>
)}

    

    </>

    
  );
}

export default Footer;
