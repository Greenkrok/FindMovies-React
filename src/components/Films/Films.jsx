import React from 'react';
import { Film } from '../Film/Film';
import './Films.scss';

export const Films = (props) => {
  const { films } = { ...props };

  return (
    <div className="films">
      {films.map((film) => <Film film={film} />)}
    </div>
  );
};
