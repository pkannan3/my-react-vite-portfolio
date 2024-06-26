import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/email8.webp";
import config from '../config.jsx';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // const ApiUrl = config[import.meta.env.UI_NODE_ENV || "development"].apiUrl;
  // const ApiUrl = "www.my-react-vite-portfolio-api.com"
  const ApiUrl = config[import.meta.env.REACT_APP_API_URL || "development"].apiUrl;

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(ApiUrl)
    let response = await fetch(ApiUrl + "/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Image" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form className="form-inner" onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                  type="tel"
                  value={formDetails.phone}
                  placeholder="Phone No."
                  onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col className="px-1">
                  <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
              </Row>
              {
                status.message &&
                <Col>
                  <p className={status.success === false ? "danger" : "success"}>
                    {status.message}
                  </p>
                </Col>
              }
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
