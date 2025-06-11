import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../Components/Navbar';
import Footer from '../Components/footer';

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/movies');
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1608002731732-2d1e4b9b50bf?auto=format&fit=crop&w=1920&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: '#fff',
      }}
    >
      <CustomNavbar />

      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: '90vh', padding: '0 20px' }}
      >
        <h1 className="display-3 fw-bold mb-3" style={{ textShadow: '0 0 30px #000' }}>
          Discover Movies & Reviews
        </h1>

        <p className="lead mb-4" style={{ textShadow: '0 0 15px #000', maxWidth: '600px' }}>
          Dive into a world of cinema with our curated reviews and detailed movie insights.
        </p>

        <button
          className="btn btn-danger btn-lg px-5 py-2 shadow"
          onClick={handleExploreClick}
        >
          Explore Movies
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
