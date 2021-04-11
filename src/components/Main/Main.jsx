import React from 'react';
import './Main.scss';
import { FilmsCounter } from '../FilmsCounter/FilmsCounter';
import { Filter } from '../Filter/Filter';
import { Films } from '../Films/Films';

export const Main = (props) => {
  const { films } = { ...props };

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
