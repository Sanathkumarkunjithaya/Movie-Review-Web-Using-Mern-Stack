import React, { useState } from 'react';

function Carousel({ onSearchQuery }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchQuery(searchQuery);
  };

  const carouselItems = [
    {
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/736dee100650681.5f0da29e3cce4.jpg',
    },
    {
      imageUrl: 'https://preview.redd.it/nasqgycd7q681.jpg?width=1080&crop=smart&auto=webp&s=93c8ea8cb9c28621175f47994b77f9dc6f161064',
    },
    {
      imageUrl: 'https://thegenuineleather.com/wp-content/uploads/2022/03/Loki-Outfits-Banner.webp',
    },
  ];

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: '10' }}>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control mr-sm-2 me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                className="d-block w-100"
                id='carousel'
                src={item.imageUrl} // Use the specific image URL here
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
