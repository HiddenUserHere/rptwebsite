import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { DISCORD_URL, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from '../../settings.jsx';


export default function SocialLinks() {
  return (
    <div className="social-links">
      <li><Link to={ DISCORD_URL }><FaDiscord size={ 25 }/></Link></li>
      <li><Link to={ YOUTUBE_URL }><FaYoutube size={ 25 }/></Link></li>
      <li><Link to={ FACEBOOK_URL }><FaFacebook size={ 25 }/></Link></li>
      <li><Link to={ INSTAGRAM_URL }><FaInstagram size={ 25 }/></Link></li>
    </div>
  );
}

