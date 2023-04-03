import React from 'react';
import './styles.css';

const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <footer>
      <nav>
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
