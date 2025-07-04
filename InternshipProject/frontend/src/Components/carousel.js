import React, { useState } from 'react';

function Carousel({ onSearchQuery, carouselImages }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchQuery(searchQuery);
  };

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

          {carouselImages?.map((imageUrl, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img className="d-block w-100" id="carousel" src={imageUrl} alt={`carousel-${index}`} />
            </div>
          ))}
        </div>

        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
