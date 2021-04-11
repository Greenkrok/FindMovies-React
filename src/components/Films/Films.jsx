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
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};
