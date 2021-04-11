import React from 'react';
import './Modal.scss';

export const Modal = (props) => {
  const { active, setActive } = { ...props };

  return (
    <div className={active ? 'modal active' : 'modal'} role="button" tabIndex={0} onClick={() => setActive(false)} onKeyDown={setActive}>
      <div className={active ? 'modal__content active' : 'modal'} onClick={(e) => e.stopPropagation()} role="button" tabIndex={0} onKeyDown={setActive}>
        <p>Тут будет описание фильма</p>
        {/* <div className="modal__title">
          {filmDetails.title}
        </div>
        <div className="modal__genres">
          {filmDetails.genres.join(', ')}
        </div>
        <div className="modal__description">
          {filmDetails.overview}
        </div>
        <div className="modal__popularity">
          {filmDetails.revenue}
        </div>
        <div className="modal__budget">
          {filmDetails.budget}
        </div> */}
      </div>
    </div>
  );
};
