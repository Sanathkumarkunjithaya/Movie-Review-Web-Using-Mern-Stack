import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import CustomNavbar from "../Components/Navbar";
import Footer from "../Components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully!");
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <>
      <style>
        {`
          .custom-input {
            background: #222;
            color: #fff;
            border: none;
            border-radius: 8px;
          }
          .custom-input::placeholder {
            color: #ccc;
            opacity: 1;
          }
        `}
      </style>

      <CustomNavbar />
      <div
        style={{
          background: "linear-gradient(to right, #000000, #1c1c1c)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card
                className="p-4 shadow"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  borderRadius: "20px",
                }}
              >
                <h2 className="text-center mb-4" style={{ color: "#0ff" }}>
                  Let's Connect
                </h2>
                <p
                  className="text-center mb-4"
                  style={{ fontSize: "14px", color: "#aaa" }}
                >
                  Have feedback or want to collaborate? Drop a message below!
                </p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="custom-input"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-info"
                    className="w-100"
                    style={{ borderRadius: "10px" }}
                  >
                    Send Message
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
