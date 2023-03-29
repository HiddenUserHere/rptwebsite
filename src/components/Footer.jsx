import React from 'react';
import '../haru/Footer.css';
import { FaTwitter, FaFacebook, FaYoutube, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
      <div className='footersocial2'>
      <ul className="social-icons">
          <li><Link><FaTwitter /></Link></li>
          <li><Link><FaFacebook  /></Link></li>
          <li><Link><FaYoutube /></Link></li>
          <li><Link><FaDiscord /></Link></li>
        </ul></div>
        <div className='footerbuttons'>
        <ul>
          <li><Link className='fontstyle'>Home</Link></li>
          <li><Link className='fontstyle'>Gameplay</Link></li>
          <li><Link className='fontstyle'>Media</Link></li>
          <li><Link className='fontstyle' >Community</Link></li>
          <li><Link className='fontstyle'>Forums</Link></li>
        </ul></div>
        <div className='footersocial'>
        <ul>
          <li><Link className='fontstyle'>Support</Link></li>
          <li><Link className='fontstyle'>Terms</Link></li>
          <li><Link className='fontstyle'>Privacy</Link></li>
          <li><Link className='fontstyle'>About</Link></li>
        </ul></div>
        <div className='haru'>
      <a href='https://wa.me/5524992024737' target={'_blank'}> <h1>HARU</h1>
       <h2>DESIGN</h2></a>

        </div>
       
      </nav>
    </footer>
  );
}

export default Footer;