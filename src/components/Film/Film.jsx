import React, { useState } from 'react';
import './Film.scss';
import { Modal } from '../Modal/Modal';

export const Film = (props) => {
  const { film } = { ...props };
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="film" role="button" tabIndex={0} onClick={() => setModalActive(true)} onKeyDown={setModalActive}>
      <div className="film__poster">
        <img src={film.poster_path} alt="Error 404" className="posters" />
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal__title">
          {film.title}
        </div>
        <div className="modal__genres">
          {film.genres.join(', ')}
        </div>
        <div className="modal__description">
          {film.overview}
        </div>
        <div className="modal__popularity">
          {film.revenue}
        </div>
        <div className="modal__budget">
          {film.budget}
        </div>
      </Modal>
    </div>
  );
};
