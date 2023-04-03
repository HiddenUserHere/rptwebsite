import React from 'react';
import { Link } from 'react-router-dom';
import imageLogo from '../assets/img/logo.png';
import imageOrnament from '../assets/img/news/ornament2.png';

const Notice = () => {
  return (
    <div className="page-content-full download-page error">
      <div className="page-content-header">
        <div className="logo">
          <img src={imageLogo}></img>
        </div>
        <h1>PAGE NOT FOUND</h1>
        <h2>Start your journey for free</h2>
        <div className="divider">
          <img src={imageOrnament}></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet
          explicabo soluta eius minima odit tempore, pariatur veniam quidem
          culpa neque deleniti ipsam ipsa iusto eligendi quam. Pariatur, tempore
          modi.
        </p>
        <button className="teste">
          <Link to="/">PLAY NOW</Link>
        </button>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Notice;
