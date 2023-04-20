import React from 'react';
import image01 from '../../../assets/img/guides/respec-item/1.png';
import image02 from '../../../assets/img/guides/respec-item/2.png';
import image03 from '../../../assets/img/guides/respec-item/3.png';
import image04 from '../../../assets/img/guides/respec-item/4.png';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const RespecItem = () => {
  return (
    <SimpleGuide
      pageTitle="Item Respec System"
      pageDescription={
        <div>
          Our Item Respec system provides players with the flexibility to change
          the specialty of their items, allowing them to adapt their gear to
          different character classes or playstyles. This powerful feature
          enables players to repurpose their items, such as weapons, armor, or
          accessories, from one character class to another, unlocking new
          possibilities and strategies in gameplay.
        </div>
      }
      guideTitle="Item Respec System"
      guideContent={
        <div className="guide-content">
          <p>
            Item Respecing is a special crafting system to change the spec and
            stats of an item. This can be done in certain ways via different
            processes. The different processes requires various items and amount
            of gold.
          </p>
          <img src={image01} />
          <img src={image02} />
          <img src={image03} />
          <p>
            The Items: There are 3 Base Stones in the art of respecing, and they
            are the following stones; Gyfu, Nied and Jera These 3 Stones can be
            used to 100% randomly respecing of an item by bringing 2 Stones and
            an item to Mixing Craftsman, Morald who is located in Ricarten Town.
            The item must be clean (not aged or mixed) in order to respec with
            the Base Stones.
          </p>
          <img src={image04} />
          <p>
            Spec Stones is a special crafting system same Item Respecing, but
            you just use one stone to respec item directly to spec.
          </p>
          <p>Note: You just need to use 1 stone using Spec Stone!</p>
        </div>
      }
    />
  );
};

export default RespecItem;
