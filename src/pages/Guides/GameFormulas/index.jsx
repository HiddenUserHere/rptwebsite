import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const GameFormulas = () => {
  return (
    <SimpleGuide
      pageTitle="Game Formulas"
      pageDescription={
        <div>
          Game Formulas section is a comprehensive guide to the various formulas
          used in our game. It provides detailed information on how various game
          mechanics, such as damage calculation and character stats, are
          calculated. By understanding these formulas, you&apos;ll be able to
          optimize your character&apos;s build and strategy, ensuring that you
          are always performing at your best. This section is an essential
          resource for serious players looking to master Regnum World and become
          powerful heroes. So take the time to study our formulas carefully, and
          gain an edge over your competition!
        </div>
      }
      guideTitle="Game Formulas"
      guideContent={
        <div className="guide-content">
          <h1>What is the Game Formulas?</h1>
          <p>
            The game formulas are the &quot;base&quot; of all game balance we do
            here in Regnum World. They are essentials because each attribute
            (Strength, Spirit, Talent, Agility, Health) when increased, reflect
            directly on defensive and offensive attributes of your character.
            Each point on these attributes changes directly on the damage your
            character does versus monsters (or versus other players, when in
            PVP) and in what chance your character has to defend an attack.
          </p>

          <hr />

          <p className="topic">Attack Rating Formula:</p>
          <ul>
            <li>1 agility = +3.0 ATK RTG</li>
            <li>1 level = +2.0 ATK RTG</li>
            <li>1 talent = +1.2 ATK RTG</li>
          </ul>

          <p className="topic">Critical Rating Formula:</p>
          <ul>
            <li>50 talent = +1% Critical</li>
            <li>Critical Rate has a fixed capacity of 50% max</li>
          </ul>

          <p className="topic">Defense Rating Formula:</p>
          <ul>
            <li>1 talent = +1.7 DEF RTG</li>
            <li>1 level = +2.0 DEF RTG</li>
            <li>1 agility = +0.8 DEF RTG (0.2 DEF RTG for Atalanta)</li>
            <li>1 health = +3 DEF RTG</li>
          </ul>

          <p className="topic">Absorption Formula:</p>
          <ul>
            <li>For each item that have Absorption Rate stats = +0.5 ABS</li>
            <li>For each 100 defense = +1 ABS</li>
            <li>For each 10 levels = +1 ABS</li>
            <li>40 strength = +1 ABS</li>
            <li>40 talent = +1 ABS</li>
            <li>60 spirit = +1 ABS</li>
            <li>60 agility = +1 ABS</li>
            <li>50 health = +1 ABS</li>
            <li>+1 ABS if character is above or equal Level 1</li>
          </ul>

          <p className="topic">Regen Formula:</p>
          <ul>
            <li>
              MP Regen: [level + ((spirit * 1.2 + health / 2) / 115)] + [item
              spec regen / 2 + item or skill regen add]
            </li>
            <li>
              HP Regen: [level + ((strength / 2 + health) / 180)] + [item spec
              regen / 2 + item or skill regen add]
            </li>
          </ul>

          <p className="topic">Block Rating Formula:</p>
          <ul>
            <li>1.0 Block = +1% Chance of Block</li>
            <li>0.5 Block = +0% Chance of Block</li>
            <li>Block Rate has a fixed capacity of 50% max</li>
          </ul>

          <p className="topic">Weight Formula:</p>
          <ul>
            <li>1 strength = +2.0 weight</li>
            <li>1 health = +1.5 weight</li>
            <li>1 level = +3.0 weight</li>
            <li>+60 weight if character is above or equal Level 1</li>
          </ul>

          <p className="topic">Run Speed Formula:</p>
          <ul>
            <li>
              RUN SPD = ((Agility / 100 + Strength / 240 + Level / 100) -
              (Character Weight)) + Item Weight
            </li>
          </ul>

          <p className="topic">HP Formula:</p>
          <ul>
            <li>
              Fighter: (level * 2.1) + (health * 1.9) + (strength * 0.5) +
              (spirit * 0.1) + (talent * 0.2) + (agility * 0.1)
            </li>
            <li>
              Mechanician: (level * 2.0) + (health * 1.4) + (strength * 0.5) +
              (spirit * 0.1) + (talent * 0.1) + (agility * 0.1)
            </li>
            <li>
              Archer: (level * 1.2) + (health * 1.5) + (strength * 0.2) +
              (spirit * 0.1) + (talent * 0.2) + (agility * 0.1)
            </li>
            <li>
              Pikeman: (level * 2.0) + (health * 1.7) + (strength * 0.4) +
              (spirit * 0.1) + (talent * 0.1) + (agility * 0.2)
            </li>
            <li>
              Atalanta: (level * 1.2) + (health * 1.6) + (strength * 0.3) +
              (spirit * 0.2) + (talent * 0.1) + (agility * 0.1)
            </li>
            <li>
              Knight: (level * 2.0) + (health * 1.4) + (strength * 0.4) +
              (spirit * 0.2) + (talent * 0.3) + (agility * 0.1)
            </li>
            <li>
              Magician: (level * 1.5) + (health * 1.7) + (strength * 0.1) +
              (spirit * 0.2) + (talent * 0.2) + (agility * 0.1)
            </li>
            <li>
              Priestess: (level * 1.5) + (health * 1.6) + (strength * 0.1) +
              (spirit * 0.3) + (talent * 0.2) + (agility * 0.1)
            </li>
            <li>
              Assassin: (level * 2.0) + (health * 1.6) + (strength * 0.4) +
              (spirit * 0.1) + (talent * 0.1) + (agility * 0.2)
            </li>
            <li>
              Shaman: (level * 1.5) + (health * 1.8) + (strength * 0.1) +
              (spirit * 0.2) + (talent * 0.2) + (agility * 0.1)
            </li>
          </ul>

          <p className="topic">MP Formula:</p>
          <ul>
            <li>Magician, Priestess, Shaman: (level * 1.5) + (spirit * 3.8)</li>
            <li>Knight, Atalanta: (level * 0.9) + (spirit * 2.7)</li>
            <li>
              Fighter, Mechanician, Pikeman, Archer, Assassin: (level * 0.6) +
              (spirit * 2.2)
            </li>
          </ul>

          <p className="topic">SP Formula:</p>
          <ul>
            <li>1 health = +1.4 SP</li>
            <li>1 strength = +0.5 SP</li>
            <li>1 talent = +0.5 SP</li>
            <li>1 level = +2.3 SP</li>
            <li>1 spirit = +1 SP</li>
            <li>+60 SP if character is above or equal Level 1</li>
          </ul>

          <p className="topic">Attack Speed Formula:</p>
          <ul>
            <li> 1 Weapon Speed = +1 Attack Speed</li>
            <li>1 Bellatra Speed = +1 Attack Speed (except inside Bellatra)</li>
          </ul>

          <p className="topic">Damage Formula:</p>
          <p>Fighter (with Melee Weapon): </p>
          <ul>
            <li>
              MIN. ATK. POW. = 1 + (Weapon MIN. ATK. POW. * ([(strength + 260) /
              260] + [(spirit + 520) / 520] + [(talent + 400) / 400] + [(agility
              + 520) / 520] - [(health + 500) / 400]))
            </li>
            <li>
              MAX. ATK POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 260) /
              260] + [(spirit + 520) / 520] + [(talent + 400) / 400] + [(agility
              + 520) / 520] - [(health + 500) / 400]))
            </li>
          </ul>
          <p>Mechanician (with Ranged Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 1 + (Weapon MIN. ATK. POW. * ([(strength + 560) /
              560] + [(spirit + 600) / 600] + [(talent + 560) / 560] + [(agility
              + 320) / 320] - [(health + 500) / 400])){' '}
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 560) /
              560] + [(spirit + 600) / 600] + [(talent + 560) / 560] + [(agility
              + 320) / 320] - [(health + 500) / 400]))
            </li>
          </ul>
          <p>Mechancian (with Melee Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 1 + (Weapon MIN. ATK. POW. * ([(strength + 320) /
              320] + [(spirit + 600) / 600] + [(talent + 560) / 560] + [(agility
              + 560) / 560] - [(health + 500) / 400]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 320) /
              320] + [(spirit + 600) / 600] + [(talent + 560) / 560] + [(agility
              + 560) / 560] - [(health + 500) / 400]))
            </li>
          </ul>
          <p>Archer (with Ranged Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 2 + (Weapon MIN. ATK. POW. * ([(strength + 400) /
              400] + [(spirit + 520) / 520] + [(talent + 460) / 460] + [(agility
              + 260) / 260] - [(health + 480) / 380]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 400) /
              400] + [(spirit + 520) / 520] + [(talent + 460) / 460] + [(agility
              + 260) / 260] - [(health + 480) / 380]))
            </li>
          </ul>
          <p>Pikeman (with Melee Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW = 1 + (Weapon MIN. ATK. POW. * ([(strength + 240) /
              240] + [(spirit + 480 ) / 480] + [(talent + 420) / 420] +
              [(agility + 400) / 400] - [(health + 500) / 400]))
            </li>
            <li>
              MAX. ATK. POW = 3 + (Weapon MAX. ATK. POW. * ([(strength + 240) /
              240] + [(spirit + 480 ) / 480] + [(talent + 420) / 420] +
              [(agility + 400) / 400] - [(health + 500) / 400]))
            </li>
          </ul>
          <p>Atalanta (with Ranged Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 2 + (Weapon MIN. ATK. POW. * ([(strength + 400) /
              400] + [(spirit + 460) / 460] + [(talent + 520) / 520] + [(agility
              + 260) / 260] - [(health + 480) / 380]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 400) /
              400] + [(spirit + 460) / 460] + [(talent + 520) / 520] + [(agility
              + 260) / 260] - [(health + 480) / 380]))
            </li>
          </ul>
          <p>Knight (with Melee Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 1 + (Weapon MIN. ATK. POW. * ([(strength + 300) /
              300] + [(spirit + 520) / 520] + [(talent + 440) / 440] + [(agility
              + 600) / 600] - [(health + 500) / 400]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 300) /
              300] + [(spirit + 520) / 520] + [(talent + 440) / 440] + [(agility
              + 600) / 600] - [(health + 500) / 400]))
            </li>
          </ul>
          <p>Magician (with Magic Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 2 + (Weapon MIN. ATK. POW. * ([(strength + 520) /
              520] + [(spirit + 260) / 260] + [(talent + 440) / 440] + [(agility
              + 480) / 480] - [(health + 300) / 300]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 520) /
              520] + [(spirit + 260) / 260] + [(talent + 440) / 440] + [(agility
              + 480) / 480] - [(health + 300) / 300]))
            </li>
          </ul>
          <p>Priestess (with Magic Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 2 + (Weapon MIN. ATK. POW. * ([(strength + 480) /
              480] + [(spirit + 240) / 240] + [(talent + 400) / 400] + [(agility
              + 480) / 480] - [(health + 600) / 500]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 480) /
              480] + [(spirit + 240) / 240] + [(talent + 400) / 400] + [(agility
              + 480) / 480] - [(health + 600) / 500]))
            </li>
          </ul>
          <p>Assassin (with Melee Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 1 + ((Weapon MIN. ATK. POW. * ([(strength + 240)
              / 240] + [(spirit + 480) / 480] + [(talent + 420) / 420] +
              [(agility + 400) / 400] - [(health + 500) / 400]))) / 2
            </li>
            <li>
              MAX. ATK. POW. = 3 + ((Weapon MAX. ATK. POW. * ([(strength + 240)
              / 240] + [(spirit + 480) / 480] + [(talent + 420) / 420] +
              [(agility + 400) / 400] - [(health + 500) / 400]))) / 2
            </li>
          </ul>
          <p>Shaman (with Magic Weapon):</p>
          <ul>
            <li>
              MIN. ATK. POW. = 2 + (Weapon MIN. ATK. POW. * ([(strength + 520) /
              520] + [(spirit + 260) / 260] + [(talent + 440) / 440] + [(agility
              + 480) / 480] - [(health + 480) / 380]))
            </li>
            <li>
              MAX. ATK. POW. = 3 + (Weapon MAX. ATK. POW. * ([(strength + 520) /
              520] + [(spirit + 260) / 260] + [(talent + 440) / 440] + [(agility
              + 480) / 480] - [(health + 480) / 380]))
            </li>
          </ul>

          <p className="topic">Special Damage Formula:</p>
          <p>- If item contains an spec:</p>
          <p>
            MIN. ATK. POW. = (Weapon MIN. ATK. POW. + Weapon MAX. ATK. POW.) /
            16
          </p>
          <p>- If item contains SPEC ATK POW LVL/X:</p>
          <p>MAX. ATK. POW. = (level / X)</p>
          <p>- If character contains Damage Boost passive skill:</p>
          <p>
            MIN. ATK. POW. = (Weapon MIN. ATK. POW. * Passive Skill ADD) + level
            / 6
          </p>
        </div>
      }
    />
  );
};

export default GameFormulas;
