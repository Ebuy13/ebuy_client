import React from 'react';
import contactimage from "../5112782.jpg";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-4">
          <h3 className="text-center text-lg-left">Contact Us</h3>
          <form>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Email address</label>
              <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="messageInput">Message</label>
              <textarea className="form-control" id="messageInput" rows="5"></textarea>
            </div>
            <button type="submit" className="btn-warning" >Submit</button>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img src={contactimage} className="card-img-top" alt="Contact us"  />
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">Address: Ebuy Online Enterprise pvt Lmt.</p>
              <p className="card-text">Phone: (+91)7994625612</p>
              <p className="card-text">Email: info@Ebuyfleamarket.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
