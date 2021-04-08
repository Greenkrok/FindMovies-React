import React, { useState } from 'react';
import { Film } from '../Film/Film';
import './Films.scss';
import { Modal } from '../Modal/Modal';

export const Films = (props) => {
  const { films } = { ...props };
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="films">
      {films.map((item) => <Film film={item} showModal={() => setModalActive(true)} />)}
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Тут должна быть информация о фильме</p>
        {/* <div className="modal__title">
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
        </div> */}
      </Modal>
    </div>
  );
};
