import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import './About.css'; // Custom styles here

function About() {
  useEffect(() => {
    const text = document.querySelector('.fade-in-text');
    if (text) {
      text.style.opacity = 0;
      let opacity = 0;
      const timer = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(timer);
        }
        text.style.opacity = opacity;
        opacity += 0.02;
      }, 20);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="about-section">
        <div className="container mt-5 text-center about-content fade-in-text">
          <h1 className="heading-glow">About Us</h1>
          <p className="lead">
            Welcome to <strong>Cinephile Reviews</strong> — your digital gateway to cinema’s greatest tales.
            We're passionate about storytelling, screen magic, and deep film critique.
          </p>
          <p>
            Whether it's the thrill of an action epic or the emotion of an indie masterpiece,
            we explore the power of film to move, inspire, and connect.
          </p>

          <div className="row mt-5 text-start">
            <div className="col-md-6 mb-4">
              <h3 className="subheading-glow">🎯 Our Mission</h3>
              <p>
                To create a vibrant space for movie lovers to dive into detailed reviews, trailers, and cinematic insights.
                We aim to build a futuristic experience where films are more than entertainment—they’re shared journeys.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <h3 className="subheading-glow">🌌 Our Vision</h3>
              <p>
                To become the ultimate digital hub for global cinema.
                From timeless classics to the latest blockbusters,
                we bridge fans with the stories they cherish most.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
