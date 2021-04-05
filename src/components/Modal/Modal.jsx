import React from 'react';
import './Modal.scss';

export const Modal = (props) => {
  const { active, setActive, children } = { ...props };

  return (
    <div className={active ? 'modal active' : 'modal'} role="button" tabIndex={0} onClick={() => setActive(false)} onKeyDown={setActive}>
      <div className={active ? 'modal__content active' : 'modal'} onClick={(e) => e.stopPropagation()} role="button" tabIndex={0} onKeyDown={setActive}>
        {children}
      </div>
    </div>
  );
};
