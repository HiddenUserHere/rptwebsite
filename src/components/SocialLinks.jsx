import React from 'react'
import '../haru/social.css';
import { FaTwitter, FaFacebook, FaYoutube, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function SocialLinks() {
  return (
    <div className="social-links">
        <li><a><FaDiscord  size={25}/></a></li>
        <li><a><FaFacebook size={25}/></a></li>
        <li> <a><FaTwitter size={25}/></a></li>
        <li> <a><FaDiscord size={25}/></a></li>
    </div>
  )
}

