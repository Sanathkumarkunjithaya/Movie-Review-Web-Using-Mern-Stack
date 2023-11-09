import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contact from '../Images/contact.jpg';
import CustomNavbar from "../Components/Navbar";
import Footer from "../Components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission, e.g., sending an email or saving to a database
    console.log(formData);
  };

  return (
    <>
    <CustomNavbar/>
    <div
      style={{
        backgroundImage: `url(${contact})`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the background covers the entire viewport height
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Contact Us</h2>
            <h3>Email : Vikas@gmail.com</h3>
            <h3>Mobile : 7676253577</h3>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
