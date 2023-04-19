import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const PetFocusSystem = () => {
  return (
    <SimpleGuide
      pageTitle="Clan System"
      pageDescription={
        <div>
          Pet Focus System is a powerful tool that allows players to
          strategically direct their pets in battle. Pets are loyal companions
          that fight alongside players, and with the Pet Focus System, players
          can guide their pets to target specific monsters during combat. The
          Pet Focus System adds depth and tactical options to battles, providing
          players with more control over their pets.
        </div>
      }
      guideTitle="Pet Focus System"
      guideContent={
        <div className="guide-content">
          <p>
            To use it, simply position the cursor on the monster when you are
            with your pet summoned, and press F key.
          </p>
          <p>Here is a video showing more:</p>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CvSi8ekCS5E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      }
    />
  );
};

export default PetFocusSystem;
