import React from 'react';
import './Filter.scss';
import { Button } from '../Button/Button';

export const Filter = (props) => {
  const { info, nameBtn1, nameBtn2 } = { ...props };

  return (
    <div className="filter">
      <p>
        {info}
        {' '}
        by
      </p>
      <Button name={nameBtn1} />
      <Button name={nameBtn2} />
    </div>
  );
};
