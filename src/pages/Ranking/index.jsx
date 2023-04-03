import React from 'react';
import imageSword from '../../assets/img/icons/sword.svg';
import imageOrnament from '../../assets/img/news/ornament2.png';
import { getRankingUrl } from './settings.js';
import './styles.css';

const Ranking = () => {
  return (
    <div className="page-content-full ranking-page">
      <div className="page-content-header">
        <div className="iconranking">
          <img src={imageSword} alt=""></img>
        </div>
        <h1>The featured players</h1>
        <h2>see below the best players of regnum world</h2>
        <div className="divider">
          <img src={imageOrnament} alt=""></img>
        </div>
        <p>
          The player ranking is a leaderboard of the best players in our game.
          It&apos;s regularly updated based on experience points accumulated by
          each player, as well as other criteria like levels achieved and
          achievements unlocked. The ranking is a fun and competitive way to see
          how you stack up against other players, and it can also help you find
          new challenges to overcome. Who knows, you may even climb the ranking
          and become the top player in our game!
        </p>
      </div>
      <div className="page-content">
        <div className="page-content-title">Rankings</div>
        <div>
          <iframe src={getRankingUrl()} width="100%" height="2000px" />
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default Ranking;
