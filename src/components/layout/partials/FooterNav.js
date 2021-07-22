import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href='mailto:asq@edspired'>Contact</a>
        </li>
        <li>
          <Link to="#0">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
