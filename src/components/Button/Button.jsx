import React from 'react';
import './Button.scss';

export const Button = (props) => {
  const { name, onClick } = { ...props };

  return (
    <button type="button" className="button" onClick={onClick}>
      {name}
    </button>
  );
};
