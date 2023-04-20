import React from 'react';
import image01 from '../../../assets/img/guides/link-item/1.png';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const LinkItem = () => {
  return (
    <SimpleGuide
      pageTitle="Item Link System"
      pageDescription={
        <div>
          The Item Link system in our game is a powerful tool that allows
          players to share and showcase their items in the game chat. With this
          feature, players can easily link an item from their inventory to the
          chat, allowing others to see the item&apos;s details. This is
          particularly useful when players are announcing items for trade or
          sale, as it provides a convenient way to showcase the item&apos;s
          attributes and generate interest among potential buyers or traders.
          The Item Link system enhances player-to-player interaction and
          facilitates smooth trading and selling transactions within the game
          community.
        </div>
      }
      guideTitle="Item Link System"
      guideContent={
        <div className="guide-content">
          <p>
            Another new feature in Regnum World is the Link Item, making it
            available to the player to show an item without having to show it in
            a swap window.
          </p>
          <p>
            To do this simply write the text, press the &quot;Ctrl&quot; key and
            click on the item you want to be shown.
          </p>
          <p>It will appear in the Chat window as in the example below:</p>
          <img src={image01} />
        </div>
      }
    />
  );
};

export default LinkItem;
