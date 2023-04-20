import React from 'react';
import imageEmoticon1 from '../../../assets/img/guides/emoticon-system/1.png';
import imageEmoticon2 from '../../../assets/img/guides/emoticon-system/2.png';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const EmoticonSystem = () => {
  return (
    <SimpleGuide
      pageTitle="Emoticon System"
      pageDescription={
        <div>
          Emoticon System adds a fun and expressive element to in-game
          communication. With a wide range of emoticons to choose from, players
          can convey emotions, reactions, and sentiments through colorful and
          animated icons in chat. Whether you want to express joy, excitement,
          surprise, or frustration, our Emoticon System allows you to easily
          convey your emotions to fellow players, creating a more immersive and
          engaging social experience.
        </div>
      }
      guideTitle="Emoticon System"
      guideContent={
        <div className="guide-content">
          <p>
            Regnum World wanted to make the game more dynamic and with this we
            created a chat system with emoticons so that its users can express
            themselves in a more fun and different way!
          </p>

          <p>
            To do this, simply type in your chat the following e1 command, as in
            the example:
          </p>

          <img src={imageEmoticon1} />

          <p>
            Below you can see a list of emoticons available on Regnum World:
          </p>

          <img src={imageEmoticon2} style={{ width: '600px' }} />
        </div>
      }
    />
  );
};

export default EmoticonSystem;
