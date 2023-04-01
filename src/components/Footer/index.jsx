import React from 'react';
import './styles.css';
import { FaHeart } from 'react-icons/fa';

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
          <p>&#169; { getYear() } Regnum World</p>
          <p>Edited with <FaHeart className="heart" size={8}/> by Sunny and nivas</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;