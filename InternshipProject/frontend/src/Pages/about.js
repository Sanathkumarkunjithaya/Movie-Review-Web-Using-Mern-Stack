import React, { useEffect } from 'react';
import nobg from '../resources/nobg_emblem.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';


function About() {
  // Function to animate text on page load
  const animateText = () => {
    const text = document.querySelector('.fade-in-text');
    text.style.opacity = 0;
    let opacity = 0;
    const timer = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      text.style.opacity = opacity;
      opacity += 0.02; // Adjust the speed of the fade-in effect
    }, 20); // Adjust the interval for smoother animation
  };

  useEffect(() => {
    animateText(); // Call the text animation function on page load
  }, []);

  return (
    <>
      <Navbar />
      <div className="parallax">
        <div className="container mt-5 text-center">
          <h1 className="text-white display-4 fade-in-text fw-bold">About Us</h1>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={nobg}
                alt="Library Interior"
                
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="lead fs-25 text-white ">
              Welcome to our Cinephile Reviews platform. We are dedicated to curating a vast and eclectic collection of cinematic experiences for our audience, celebrating the art of storytelling through film. Our mission is to ignite a passion for movies, sparking discussions, and fostering a deeper appreciation for the world of cinema. Just as books have carried forward the knowledge of generations, we believe that films have the power to transport us to different worlds, inspire creativity, and provoke thought. Join us on this cinematic journey, and let's explore the magic of storytelling through the lens of the silver screen together.
              </p>
              <p className="text-white ">
              To be a dynamic hub for film enthusiasts, enriching our community through the inspiring and transformative influence of cinema.
              </p>
            </div>
          </div>
          {/* More content */}
          <div className="row mt-5">
            <div className="col-md-6">
              <h2 className="text-primary text-white">Our Vision</h2>
              <p className="text-white ">
              Our vision is to establish an inclusive and dynamic platform for film enthusiasts that enriches the lives of our community. We wholeheartedly believe in the transformative power of movies to inspire, educate, and entertain individuals. We aim to foster a shared passion for cinema and cultivate a space where every film lover can explore, learn, and connect through the magic of storytelling on the big screen.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="text-primary text-white">Our Mission</h2>
              <p className="text-white ">
              Our mission is to curate a wide-ranging selection of films that cater to all tastes and preferences. We strive to create a warm and inviting space where cinephiles can immerse themselves in captivating stories, expand their cinematic horizons, and connect with fellow movie enthusiasts.
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
