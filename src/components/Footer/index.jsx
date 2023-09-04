import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer>
      <nav>
        <div className="menu-footer">
          <Link to="/terms-of-service">Terms of Service</Link>
          {' | '}
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' | '}
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
        <div className="haru">
          <h1>HARU</h1>
          <h2>DESIGN</h2>
        </div>
        <div className="edited">
          <p>&#169; {getYear()} Regnum World</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
