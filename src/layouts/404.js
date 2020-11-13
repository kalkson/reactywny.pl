import React from 'react';
import { Link } from 'gatsby';
import Styled404Layout from './styled/404.styled';
import Logo from '../assets/svg/logo-1.svg';

const NotFoundLayout = () => {
  return (
    <Styled404Layout>
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <h1 className="heading">404</h1>
    </Styled404Layout>
  );
};

export default NotFoundLayout;
