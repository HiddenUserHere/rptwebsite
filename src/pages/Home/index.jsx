import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import News from '../../components/News.jsx';
import SliderClass from '../../components/SliderClass/index.jsx';
import '../../haru/app.css';
import { getRegisterUrl } from '../../settings.jsx';

const Home = () => {
  return (
    <div className="home">
      <div className="header-top">
        <div className="content-header">
          <h1>LEGENDARY CAMPAIGNS</h1>
          <h2>THE WORLD OF REGNUM PRISTON TALE IS BACK</h2>
          <div className="button-header">
            <Link to={ getRegisterUrl() } target="_blank">
              <button>Register<small>New account</small></button>
            </Link>
            <Link to="/download">
              <button>Download<small>Play Free</small></button>
            </Link>
          </div>
        </div>
      </div>

      <div className="news-title"><h1>NEWS</h1>
        <img src="../src/assets/img/news/ornament2.png"></img></div>
      <News/>
      <div className="content-map">
        <h1>WELCOME ADVENTURER</h1>
        <h2>NEW TO REGNUM WORLD?</h2>
        <div className="divider"><img src="../src/assets/img/news/ornament2.png"></img></div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nemo sequi eius quo laudantium rem sed,
          iste repellendus veritatis? Officiis commodi quibusdam consequatur doloremque rem sint doloribus reiciendis
          ipsa aperiam.</h3>
        <button>LEARN MORE</button>
      </div>
      <SliderClass/>
      <div className="space"></div>
    </div>


  );
};

export default Home;