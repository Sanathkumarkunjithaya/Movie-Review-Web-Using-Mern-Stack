import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{ backgroundImage: `url(https://img.freepik.com/free-vector/movie-film-strip-blue-background_1017-33458.jpg)`, backgroundSize: 'cover' }}>
    <App />
  </div>
);
