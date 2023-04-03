import React from 'react';
import imageOrnament from '../../../../assets/img/news/ornament2.png';
import { getBossTimeUrl } from './settings.js';
import './styles.css';

const BossTime = () => {
  return (
    <div className="content-map">
      <h2>BOSS TIME</h2>
      <div className="divider">
        <img src={imageOrnament} alt=""></img>
      </div>
      <div className="boss-time">
        <iframe src={getBossTimeUrl()} />
      </div>
    </div>
  );
};

export default BossTime;
