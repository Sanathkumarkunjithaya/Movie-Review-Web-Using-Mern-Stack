import React, { useEffect, useState } from 'react';
import Carousel from '../Components/carousel';
import Card from '../Components/card';
import Footer from '../Components/footer';
import CustomNavbar from '../Components/Navbar';
import axios from 'axios';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res1 = await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
          params: { api_key: API_KEY, page: 1 }
        });
        const res2 = await axios.get(`https://api.themoviedb.org/3/trending/movie/week`, {
          params: { api_key: API_KEY, page: 2 }
        });

        setMovies([...res1.data.results, ...res2.data.results]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [API_KEY]);

  const redirectToTrailer = async (movieId) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );

      const trailers = res.data.results.filter(
        (video) => video.type === 'Trailer' && video.site === 'YouTube'
      );

      if (trailers.length > 0) {
        const youtubeURL = `https://www.youtube.com/watch?v=${trailers[0].key}`;
        window.open(youtubeURL, '_blank');
      } else {
        alert('Trailer not available');
      }
    } catch (err) {
      console.error('Error fetching trailer:', err);
    }
  };

  const handleReadMore = (movieId) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [movieId]: true,
    }));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <CustomNavbar />
      <Carousel
        onSearchQuery={handleSearchQuery}
        carouselImages={movies.slice(0, 5).map((movie) => `https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`)}
      />

      <div className="container mt-4">
        <div className="row">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <Card
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
                text={
                  expandedDescriptions[movie.id]
                    ? movie.overview
                    : movie.overview.slice(0, 100) + '...'
                }
                rating={movie.vote_average}
              />

              {/* Show 'More Description' button only if not already expanded */}
              {!expandedDescriptions[movie.id] && (
                <button
                  onClick={() => handleReadMore(movie.id)}
                  className="btn btn-secondary btn-sm mt-2 me-2"
                >
                  More Description
                </button>
              )}

              <button
                onClick={() => redirectToTrailer(movie.id)}
                className="btn btn-danger btn-sm mt-2"
              >
                Watch Trailer
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
