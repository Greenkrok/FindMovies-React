import React from 'react';
import './Button.scss';

export const Button = (props) => {
  const { name, handleClick } = { ...props };

  return (
    <button type="button" className="button" onClick={handleClick}>
      {name}
    </button>
  );
};
