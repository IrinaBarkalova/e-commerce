import { memo } from 'react';

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <Link to="/">Products</Link>
      <Link to="/categories">Categories</Link>
      <button disabled>About Us</button>
    </header>
  );
};

export default memo(Header);
