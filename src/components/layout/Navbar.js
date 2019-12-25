import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
  return (
    <nav className='navbar bg-primary'>
      <h1 className='text-light'>{props.title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Yalantis Test Task'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
