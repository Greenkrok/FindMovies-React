import React from 'react';
import './Header.scss';
import { Forma } from '../Forma/Forma';
import { Filter } from '../Filter/Filter';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  const handleClick = () => console.log('Нажата кнопка поиска');
  return (
    <header className="header">
      <Logo />
      <h2 className="header__title"> find your movie </h2>
      <Forma />
      <Filter info="search" nameBtn1="title" nameBtn2="genre" />
      <Button name="Search" onClick={handleClick} />
    </header>
  );
};
