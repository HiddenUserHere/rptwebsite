import React from 'react';
import imageGlamArmament from '../../../assets/img/guides/glamorous-brush/glam_armament_varnish.png';
import imageGlamAttire from '../../../assets/img/guides/glamorous-brush/glam_attire_glaze.png';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const GlamorousBrushSystem = () => {
  return (
    <SimpleGuide
      pageTitle="Glamorous Brush System"
      pageDescription={
        <div>
          Glamorous Brush System is a feature of our game that allows players to
          swap the skins of any defensive or offensive item with another item of
          the same category, such as a lower-level item. This allows players to
          create unique and personalized looks for their equipment, without
          sacrificing the stats and abilities of their best gear. With our
          Glamorous Brush System, you can show off your style and individuality,
          and make your character stand out in the crowd. It&apos;s a fun and
          creative way to express yourself, and add a personal touch to your
          gameplay. So why not try out our Glamorous Brush System and create a
          look that&apos;s all your own?
        </div>
      }
      guideTitle="Glamorous Brush System"
      guideContent={
        <div className="guide-content">
          <p>
            Felt bad that you couldn&apos;t wear lower level items because of
            their stats but you really like how they look? Now you can without
            losing stats!! Turn any normal Armor, Robe, Weapon or Shield into a
            Costume or Skin and you can equip them over your items to make your
            look be anything you want!
          </p>

          <p>
            There are two brushes. <u>Glamorous Attire Glaze</u>, for Armor and
            Robes, and <u>Glamorous Armament Varnish</u>, for Weapons and
            Shields!
          </p>

          <table className="glamorous-item-table">
            <tbody>
              <tr>
                <td className="glamorous-item">
                  <img src={imageGlamAttire}></img>
                </td>
                <td>
                  <p>Glamorous Attire Glaze</p>
                  <p>Turn a normal Armor or Robe into a Costume</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="glamorous-item-table">
            <tbody>
              <tr>
                <td className="glamorous-item">
                  <img src={imageGlamArmament}></img>
                </td>
                <td>
                  <p>Glamorous Armament Varnish</p>
                  <p>Turn a normal Weapon or Shield into a Skin</p>
                </td>
              </tr>
            </tbody>
          </table>

          <p>Here are some things you need to know:</p>

          <ul>
            <li>
              - The process cannot be undone, so be thoughtful when doing it on
              items you value.
            </li>
            <li>
              - The item stats of the item are lost when glamorizing it, except
              integrity.
            </li>
            <li>
              - The item requirements of the item are lost when glamorizing,
              except the level requirement.
            </li>
            <li>
              - The Mixing Formula or Aging Level of the item is retained.
            </li>
            <li>
              - Glamorized Items can be Aged or Mixed. The Aging process
              can&apos;t fail for glamorized items as usual items do.
            </li>
            <li>- The weight of a glamorized item is reduced by 75%.</li>
            <li>
              - The gold value of a glamorized item is reduced by 50%. This
              affects prices in Aging and Mixing for example.
            </li>
          </ul>

          <p style={{ 'padding-top': '0px' }}>
            Here are some things you need to know:
          </p>

          <ul>
            <li>- Right click the brush;</li>
            <li>- Aim the item you want to glamorize;</li>
            <li>- Left click on it;</li>
            <li>- Confirm you want to glamorize;</li>
            <li>- Done!</li>
          </ul>
        </div>
      }
    />
  );
};

export default GlamorousBrushSystem;
