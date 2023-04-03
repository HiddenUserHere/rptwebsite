import React from 'react';
import { Link } from 'react-router-dom';
import SliderClass from '../../components/SliderClass/index.jsx';
import { getRegisterUrl } from '../../settings.jsx';
import '../../styles.css';
import BossTime from './components/BossTime/index.jsx';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <div className="header-top">
        <div className="content-header">
          <h1>LEGENDARY CAMPAIGNS</h1>
          <h2>THE WORLD OF REGNUM PRISTON TALE IS BACK</h2>
          <div className="button-header">
            <Link to={getRegisterUrl()} target="_blank">
              <button>
                Register<small>New account</small>
              </button>
            </Link>
            <Link to="/download">
              <button>
                Download<small>Play Free</small>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*<div className="news-title"><h1>NEWS</h1>*/}
      {/*  <img src="../src/assets/img/news/ornament2.png"></img></div>*/}
      {/*<News/>*/}
      <BossTime />
      <SliderClass />
      <div className="space"></div>
    </div>
  );
};

export default Home;
