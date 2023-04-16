import React from 'react';

import imageAgingStone from '../../../assets/img/guides/item-aging/itbi110.bmp';
import imageCopperOre from '../../../assets/img/guides/item-aging/itbi111.bmp';
import imageRipeStone from '../../../assets/img/guides/item-aging/itbi162.bmp';
import imageFluenceStone from '../../../assets/img/guides/item-aging/itbi230.bmp';

import imageFadeo from '../../../assets/img/guides/item-aging/itos103.bmp';
import imageSparky from '../../../assets/img/guides/item-aging/itos104.bmp';
import imageRaident from '../../../assets/img/guides/item-aging/itos105.bmp';
import imageTransparo from '../../../assets/img/guides/item-aging/itos106.bmp';
import imageMurky from '../../../assets/img/guides/item-aging/itos107.bmp';
import imageDevine from '../../../assets/img/guides/item-aging/itos108.bmp';
import imageCelesto from '../../../assets/img/guides/item-aging/itos109.bmp';
import imageMirage from '../../../assets/img/guides/item-aging/itos110.bmp';
import imageInferna from '../../../assets/img/guides/item-aging/itos111.bmp';
import imageEnigma from '../../../assets/img/guides/item-aging/itos112.bmp';
import imageBellum from '../../../assets/img/guides/item-aging/itos113.bmp';
import imageOredo from '../../../assets/img/guides/item-aging/itos114.bmp';

import SimpleGuide from '../../../components/SimpleGuide/index.jsx';
import { agingChances, agingCosts } from './settings';
import './styles.css';

const ItemAging = () => {
  const getAcceptedAgingItemsTable = () => (
    <table className="accepted-aging-items-table">
      <thead>
        <tr>
          <td className="cell">Weapons</td>
          <td className="cell">Defenses</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Axes</td>
          <td>Armors</td>
        </tr>
        <tr>
          <td>Hammers</td>
          <td>Robes</td>
        </tr>
        <tr>
          <td>Scythes</td>
          <td>Shields</td>
        </tr>
        <tr>
          <td>Scythes</td>
          <td>Shields</td>
        </tr>
        <tr>
          <td>Swords</td>
          <td>Orbs</td>
        </tr>
        <tr>
          <td>Claws</td>
          <td></td>
        </tr>
        <tr>
          <td>Javelins</td>
          <td></td>
        </tr>
        <tr>
          <td>Bows</td>
          <td></td>
        </tr>
        <tr>
          <td>Wands and Staffs</td>
          <td></td>
        </tr>
        <tr>
          <td>Daggers</td>
          <td></td>
        </tr>
        <tr>
          <td>Phantoms</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );

  const getAgingStonesTable = () => (
    <table className="aging-stones-table">
      <thead>
        <tr>
          <td></td>
          <td>Stone Name</td>
          <td>Stone Effect</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={imageCopperOre}></img>
          </td>
          <td>Copper Ore</td>
          <td>Prevents item being broken</td>
        </tr>
        <tr>
          <td>
            <img src={imageAgingStone}></img>
          </td>
          <td>Aging Stone</td>
          <td>Decreases failure chance by 10%</td>
        </tr>
        <tr>
          <td>
            <img src={imageRipeStone}></img>
          </td>
          <td>Ripe Stone</td>
          <td>Decreases failure chance by 20%</td>
        </tr>
        <tr>
          <td>
            <img src={imageFluenceStone}></img>
          </td>
          <td>Fluence Stone</td>
          <td>Decreases failure chance by 30%</td>
        </tr>
      </tbody>
    </table>
  );

  const getAgingChancesTable = () => {
    return (
      <table className="aging-chances-table">
        <thead>
          <tr>
            <td colSpan="12">Required Sheltoms</td>
            <td colSpan="2">Required</td>
            <td colSpan="2">Chance of Failure</td>
            <td colSpan="4">Chance of Failure with Stones</td>
          </tr>
          <tr>
            <td>
              <img src={imageFadeo} />
            </td>
            <td>
              <img src={imageSparky} />
            </td>
            <td>
              <img src={imageRaident} />
            </td>
            <td>
              <img src={imageTransparo} />
            </td>
            <td>
              <img src={imageMurky} />
            </td>
            <td>
              <img src={imageDevine} />
            </td>
            <td>
              <img src={imageCelesto} />
            </td>
            <td>
              <img src={imageMirage} />
            </td>
            <td>
              <img src={imageInferna} />
            </td>
            <td>
              <img src={imageEnigma} />
            </td>
            <td>
              <img src={imageBellum} />
            </td>
            <td>
              <img src={imageOredo} />
            </td>
            <td>Aging Level</td>
            <td>Item Level Req.</td>
            <td>Chance of Failure</td>
            <td>With Aging Stone</td>
            <td>With Ripe Stone</td>
            <td>With Fluence Stone</td>
          </tr>
        </thead>
        <tbody>
          {agingChances.slice(0, 18).map((aging, key) => {
            return (
              <tr key={key}>
                {aging.slice(0, 12).map((amountSheltoms, key2) => (
                  <td key={key2}>{amountSheltoms > 0 ? amountSheltoms : ''}</td>
                ))}
                <td>{aging[12]}</td>
                <td>{aging[13]}</td>
                {aging.slice(14, 18).map((percent, key3) => (
                  <td key={key3}>{percent}%</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const getAgingCostTable = () => (
    <table className="aging-cost-table">
      <thead>
        <tr>
          <td colSpan="2">Aging cost</td>
        </tr>
      </thead>
      <tbody>
        {agingCosts.slice(0, 18).map((value, index) => (
          <tr key={index}>
            <td>+{index}</td>
            <td>Item Value x {value} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <SimpleGuide
      pageTitle="Item Aging"
      pageDescription={
        <div>
          Aging is a powerful way to enhance your items&apos; attributes in our
          game. With the help of Sheltoms and Gold, you can improve the stats
          and effectiveness of your equipment, making them more powerful and
          giving you an edge in combat. Our Aging system is straightforward and
          easy to use, and it provides a significant boost to your
          character&apos;s overall strength.
        </div>
      }
      guideTitle="Item Aging"
      guideContent={
        <div className="guide-content">
          <h1>What is the Item Aging for?</h1>
          <p>
            It serves to improve the performance of your item, it can improve
            attack items and defense items. You have to keep in mind that not
            all defense items can be improved in this system. The items that
            accept aging are:
          </p>
          {getAcceptedAgingItemsTable()}

          <p>
            In order for these items to have their performance improved in this
            system, it is necessary that you use gold and sheltoms. For each
            aging improvement, the gold value is changed and the amount and type
            of sheltoms used are also changed.
          </p>

          <h1>How to age an item?</h1>
          <p>
            Just go to Pillai Town and find the Arcane Moriph, after finding it
            click on it and a box will open, in this box, it has two places: one
            for your item and other also for the sheltoms needed for aging.
            After placing the item and the required the Item Aging button will
            be activated.
          </p>
          <p>
            Please note that from the +8 aging it starts show also the chances
            of Failure, and for each aging the fail chance is different. In
            order to you decrease the chance of failure you can use a Special
            Stone. This stones decreases the CHANCE OF AGING FAILURE. If the
            chance is 0, your aging will not fail and you will not lose your
            item, however, if the chance is 1% or higher the aging can fail and
            your item can break. To decrease the aging fail chance you can use
            one of these stones below:
          </p>
          {getAgingStonesTable()}

          <p>
            Below you can find a table with the failure chances and sheltoms
            needed for each aging:
          </p>
          {getAgingChancesTable()}

          <p>
            NOTE: All aging levels have 5% of chance to up +2 in any aging
            level.
          </p>
          {getAgingCostTable()}
        </div>
      }
    />
  );
};

export default ItemAging;
