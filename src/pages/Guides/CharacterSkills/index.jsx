import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';
import './styles.css';
import { getSkillsListUrl } from './settings.js';

const CharacterSkills = () => {
  return (
    <SimpleGuide
      pageTitle="Character Skills"
      pageDescription={ (
        <div>
          Our Character Skills List section provides a detailed overview of all the skills available for each class in
          our game. You can browse through the list to see all the skills available, their descriptions, and their
          requirements. Whether you're a fighter, mage, or archer, our Skills List section is an essential resource for
          mastering the art of combat in our world.
        </div>
      ) }
      guideTitle="Character Skills"
      guideContent={ (
        <div>
          <iframe src={ getSkillsListUrl() } width="100%" height="2000px"/>
        </div>
      ) }
    />
  );
};

export default CharacterSkills;