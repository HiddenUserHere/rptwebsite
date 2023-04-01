import React from 'react';
import '../haru/Footer.css';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DISCORD_URL, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../settings.jsx';

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="footer-social-2">
          <ul className="social-icons">
            <li>
              <Link to={ DISCORD_URL }>
                <FaDiscord title="Discord"/>
              </Link>
            </li>
            <li>
              <Link to={ YOUTUBE_URL }>
                <FaYoutube title="YouTube"/>
              </Link>
            </li>
            <li>
              <Link to={ FACEBOOK_URL }>
                <FaFacebook title="Facebook"/>
              </Link>
            </li>
            <li>
              <Link to={ INSTAGRAM_URL }>
                <FaInstagram title="Instagram"/>
              </Link>
            </li>
          </ul>
        </div>
        <div className="haru">
          <h1>HARU</h1>
          <h2>DESIGN</h2>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;