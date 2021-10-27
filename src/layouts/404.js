import { Link } from 'gatsby';
import React from 'react';

import Styled404Layout from './styled/404.styled';

const NotFoundLayout = () => {
  return (
    <Styled404Layout className="container">
      <h1 className="heading" aria-label="ta strona nie istnieje">
        404
      </h1>
      <p role="alert">Taka strona nie istnieje</p>
      <Link to="/" className="link">
        Przejdź do strony głównej
      </Link>
    </Styled404Layout>
  );
};

export default NotFoundLayout;
