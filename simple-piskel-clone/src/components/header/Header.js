import React from 'react';
import Auth from '../auth/Auth';

import './Header.scss';

const Header = () => (
  <header className='header'>
    <a className='header-link' href='/'>
      Simple Piskel Clone
    </a>
    <Auth />
  </header>
);

export default Header;
