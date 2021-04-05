import React, { useEffect, useState } from 'react';
import './Main.scss';
import { FilmsCounter } from '../FilmsCounter/FilmsCounter';
import { Filter } from '../Filter/Filter';
import { Films } from '../Films/Films';

export const Main = () => {
  const [films, setFilms] = useState([]);
  const getFilms = () => fetch('https://reactjs-cdp.herokuapp.com/movies?search=&searchBy=title\n')
    .then((response) => response.json())
    .then(
      (result) => {
        setFilms(result.data);
      },
    );
  useEffect(() => {
    getFilms();
  }, []);
  return (
    <main className="main">
      <div className="main__title">
        <FilmsCounter count={films.length} />
        <Filter info="sort" nameBtn1="release date" nameBtn2="rating" />
      </div>
      <Films films={films} />
    </main>
  );
};
