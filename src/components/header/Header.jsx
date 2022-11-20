import React from 'react';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import {Button} from '../button/Button';

const Header = () => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__content">
            <Logo />
            <Nav />
          </div>
          <Button name="Заказать звонок" text={'uppercase'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
