/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './App.scss';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import { movieApiBuildUrl } from '../../api/utils/url-builders';

const App = () => {
  const [films, setFilms] = useState([]);
  const getFilms = () => fetch(movieApiBuildUrl())
    .then((response) => response.json())
    .then(
      (result) => {
        setFilms(result.data);
      },
    );

  return (
    <div className="app">
      <Header handleClick={getFilms} />
      <Main films={films} />
      <Footer />
    </div>
  );
};

export default App;
