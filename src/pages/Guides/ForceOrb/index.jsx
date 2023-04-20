import React from 'react';
import imageForceOrb from '../../../assets/img/guides/force-orb/1.png';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const ForceOrb = () => {
  return (
    <SimpleGuide
      pageTitle="Force Orb"
      pageDescription={
        <div>
          Force Orb System is a powerful boost that can increase your attack
          power for a limited period of time. By utilizing the Force Orb,
          players can tap into a hidden source of energy and enhance their
          offensive capabilities, dealing more damage to enemies in battles.
          This temporary boost can be a game-changer in tough fights, allowing
          players to overcome challenging opponents and achieve victory.
        </div>
      }
      guideTitle="Force Orb"
      guideContent={
        <div className="guide-content">
          <p>
            Force orb is an ability to upgrade your Attack Power for a period of
            time.
          </p>

          <img src={imageForceOrb} />

          <ul>
            <li>
              Meet Force Master in ,Ricarten Town, Phillai Town or Eura Village
              and put your sheltom in the window, click on the mixing button and
              receive your force orb, when you used your sheltom it will return
              as a force and cannot be used again.
            </li>
            <li>
              When you got a force orb you can use it only once and there are no
              further ability&apos;s with your force orb.
            </li>
            <li>
              When using your force orb you&apos;ll see an added animation when
              hitting a monsters.
            </li>
            <li>You can&apos;t use two forces at once.</li>
          </ul>
        </div>
      }
    />
  );
};

export default ForceOrb;
