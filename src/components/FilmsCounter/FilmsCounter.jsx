import React from 'react';
import './FilmsCounter.scss';

export const FilmsCounter = (props) => {
  const { count } = { ...props };
  return (
    <div className="films-counter">
      <p>
        {count}
        {' '}
        movies found
      </p>
    </div>
  );
};
