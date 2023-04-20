import React from 'react';
import image01 from '../../../assets/img/guides/distributor-system/1.png';
import image02 from '../../../assets/img/guides/distributor-system/2.png';
import image03 from '../../../assets/img/guides/distributor-system/3.png';
import image04 from '../../../assets/img/guides/distributor-system/4.png';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const DistributorSystem = () => {
  return (
    <SimpleGuide
      pageTitle="Item Distributor System"
      pageDescription={
        <div>
          Our New Item Distributor is a versatile system that empowers players
          with the ability to send and receive items among themselves, as well
          as receive items from server rewards such as Roll Dice events and
          other in-game events. This feature promotes a collaborative and
          interactive gameplay experience, allowing players to share resources,
          gear, and other valuable items with their friends, guildmates, or
          other players. Additionally, the system facilitates the distribution
          of rewards obtained from server events, ensuring that players can
          enjoy the fruits of their efforts in the game.
        </div>
      }
      guideTitle="Item Distributor System"
      guideContent={
        <div className="guide-content">
          <p>
            Regnum World has reshaped the Distributor system, now you can
            withdraw items, you can also send or gift to friend.
          </p>
          <img src={image01} />
          <p>
            To remove items, simply click on &quot;Retrieve Items&quot; and
            accept the item that will appear or discard it.
          </p>
          <img src={image02} />
          <p>
            To send, click on &quot;Send Items&quot;, place the item you want to
            send and write the nick of who should receive the item:
          </p>
          <img src={image03} />
          <p>
            Once you&apos;ve finished, a confirmation window will appear if
            you&apos;re really sure you want to send the item.
          </p>
          <img src={image04} />
          <p>
            Ready! Just the other player go to the distributor to get the item
            shipped.
          </p>
        </div>
      }
    />
  );
};

export default DistributorSystem;
