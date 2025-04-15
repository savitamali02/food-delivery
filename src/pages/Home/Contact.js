import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/ContactStyle.css";
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';


const Contact= ()=> {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Your message has been submitted successfully!");

   
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  return (
    <>
    <Header/>
  <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="contact-container w-100">
    <div className="text-center mb-4">
      <h2>Contact Us</h2>
      <h4>Fill out the form below to get in touch!</h4>
    </div>

  
    {successMsg && (
            <div className="alert alert-success text-center" role="alert">
              {successMsg}
            </div>
          )}

    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" className="form-control" placeholder="John" />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" className="form-control" placeholder="Smith" />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" placeholder="john@example.com" />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" className="form-control" rows="4" placeholder="Write your message here..."></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</div>
<h2 className='text-center'>Location </h2>
<div className="map-wrapper my-5 d-flex justify-content-center">
  
  <div className="map-container">
    <iframe
      title="Tasty Burger Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0412439631234!2d73.85674327502766!3d18.52587948257301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c04b2f0f4b13%3A0x1234567890abcdef!2sSamir%20Complex%2C%20Ramnagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1712738280000!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
<Footer/>
   </>
  )
}

export default Contact;
