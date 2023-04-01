import React from 'react';
import '../haru/Footer.css';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DISCORD_URL, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../settings.jsx';

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="footersocial2">
          <ul className="social-icons">
            <li><Link to={DISCORD_URL}><FaDiscord/></Link></li>
            <li><Link to={YOUTUBE_URL}><FaYoutube/></Link></li>
            <li><Link to={FACEBOOK_URL}><FaFacebook/></Link></li>
            <li><Link to={INSTAGRAM_URL}><FaInstagram/></Link></li>
          </ul>
        </div>
        <div className="footerbuttons">
          <ul>
            <li><Link className="fontstyle">Home</Link></li>
            <li><Link className="fontstyle">Gameplay</Link></li>
            <li><Link className="fontstyle">Media</Link></li>
            <li><Link className="fontstyle">Community</Link></li>
            <li><Link className="fontstyle">Forums</Link></li>
          </ul>
        </div>
        <div className="footersocial">
          <ul>
            <li><Link className="fontstyle">Support</Link></li>
            <li><Link className="fontstyle">Terms</Link></li>
            <li><Link className="fontstyle">Privacy</Link></li>
            <li><Link className="fontstyle">About</Link></li>
          </ul>
        </div>
        <div className="haru">
          <a href="https://wa.me/5524992024737" target={'_blank'}><h1>HARU</h1>
            <h2>DESIGN</h2></a>

        </div>

      </nav>
    </footer>
  );
};

export default Footer;