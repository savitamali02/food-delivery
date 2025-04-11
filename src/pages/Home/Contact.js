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
<Footer/>
   </>
  )
}

export default Contact;
