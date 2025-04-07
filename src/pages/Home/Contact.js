import React from 'react'
import "../../styles/ContactStyle.css";


const Contact= ()=> {
  return (
    <>
  <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="contact-container w-100">
    <div className="text-center mb-4">
      <h1>Contact Us</h1>
      <h3>Fill out the form below to get in touch!</h3>
    </div>
    <form className="contact-form">
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

   </>
  )
}

export default Contact;
