import React from 'react';
import SimpleGuide from '../../components/SimpleGuide/index.jsx';
import { getItemListUrl } from './settings.js';

const ItemList = () => {
  return (
    <SimpleGuide
      pageTitle="Item List"
      pageDescription={
        <div>
          Our Item List section provides a comprehensive overview of all the
          items available in our game, including weapons, armor, shields, and
          more. You can browse through the list to see all the items available
          for each class, as well as their requirements and stats.
          <br />
          In addition, you can see about the different techniques you can use to
          improve your items, such as Aging or Mixing, and see how they affect
          their performance. Whether you&apos;re a seasoned player or a newcomer
          to our game, our Item List section is an essential resource for
          mastering the art of item management and becoming a powerful hero in
          our world.
        </div>
      }
      guideTitle="Item List"
      guideContent={
        <div>
          <iframe src={getItemListUrl()} width="100%" height="2000px" />
        </div>
      }
    />
  );
};

export default ItemList;
