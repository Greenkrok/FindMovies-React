import React from 'react';
import './Film.scss';

export const Film = (props) => {
  const { film, showModal } = { ...props };

  return (
    <div className="film" role="button" tabIndex={0} onKeyDown={showModal} onClick={showModal}>
      <div className="film__poster">
        <img src={film.poster_path} alt={film.title} className="posters" />
      </div>
      <div className="film__info">
        <div className="film__description">
          <div className="film__title">
            <p>
              {film.title}
            </p>
          </div>
          <div className="film__genres">
            <p>
              {film.genres.join(', ')}
            </p>
          </div>
        </div>
        <div className="film__date">
          <p>
            {film.release_date.slice(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
};
