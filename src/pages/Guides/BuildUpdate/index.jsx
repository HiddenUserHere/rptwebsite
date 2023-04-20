import React from 'react';
import imageBuildUpdate01 from '../../../assets/img/guides/build-update/01.gif';
import imageBuildUpdate02 from '../../../assets/img/guides/build-update/02.gif';
import imageBuildUpdate03 from '../../../assets/img/guides/build-update/03.gif';
import imageBuildUpdate04 from '../../../assets/img/guides/build-update/04.gif';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const BuildUpdate = () => {
  return (
    <SimpleGuide
      pageTitle="Build Update"
      pageDescription={
        <div>
          Build Update has brought significant changes to the character
          attributes in our game. We&apos;ve fine-tuned and rebalanced character
          stats and their attributes. With the Build Update, you&apos;ll need to
          strategize and adapt your playstyle to the updated character
          attributes, ensuring that you&apos;re always at the top of your game.
        </div>
      }
      guideTitle="Build Update"
      guideContent={
        <div className="guide-content">
          <h1>What is The Build Update?</h1>
          <p>
            Unlike other servers, here at Regnum World, we have The Build
            Update, which is designed to give to players more freedom to make
            the ideal build for each possible scenario of the game, trying to
            escape the standard of maximizing only a specific attribute of a
            class (eg, invest only in Strength for Fighters and increase points
            on other attributes just to equip items) that exist on other
            servers.
          </p>
          <p>
            The Build Update has made a series of changes in game attributes and
            formulas to reshape the entire game balance, causing all stats (from
            Strength to Health) give a specific increase or decrease, which
            changes directly in the way how some attack and defense skills
            behave in game.
          </p>

          <img src={imageBuildUpdate01} />

          <p>
            A clear example of the improvement that the Build Update brought is
            the Talent attribute, which when maximized every X points (see table
            below) can increase +1% of the character&apos;s critical. Depending
            on the class and skills, for example a Fighter - who is supposed to
            have low critical rate due to the use of Axes as the main weapon,
            which have a low critical attribute - becomes one of the interesting
            attributes to be maximized, so that the player can gain an advantage
            in scenarios like PvP.
          </p>

          <h1>How do you calculate the status of a character?</h1>

          <p>
            Each status point added to the character is calculated according to
            a specific formula (see below in the formula table for the formulas)
            and the character attributes are updated instantly. Character
            skills, especially passive damage or defense, also directly
            influence the outcome of the formulas. Quest items can also
            influence the final result of the calculation, so when calculating
            one you must also count on those additional ones.
          </p>

          <p>
            In the example below, we have a level 106 Knight using two items, a
            clean 98 Sword and a clean Armor 98, with no acquired skills and no
            additional strengths (game crowns, etc.) with a generic build.
          </p>

          <img src={imageBuildUpdate02} />
          <br />
          <img src={imageBuildUpdate03} />
          <img src={imageBuildUpdate04} />

          <p>
            Let&apos;s use as an example of calculation two attributes, one
            offensive (ATK RTG) and one defensive (HP), but it can be done with
            other attributes simply by following the table of formulas of the
            game and being with the values of the status of the items and the
            character to do the calculation.
          </p>

          <p>Starting with ATK RTG, we have the following example formula:</p>

          <p className="formula">
            ATK RTG = (Agility * 3 + Level * 2 + Talent * 1.2) + ITEMS ATK. RTG.
          </p>

          <p>
            Our example character has 100 points invested in Agility, 100 points
            invested in Talent and it is level 106. The &apos;Items ATK
            RTG&apos; is the sum of all the ATK RTG that the items the character
            is using on the character at the moment (this counts weapon,
            accessories, bracelets, powerups, etc). For this example, the only
            item that the character is using offensive, which is a clean sword,
            has ATK RTG 184 and an additional specialty (spec) that is
            calculated by LVL / 1 (106/1 = 106). Changing the formula to the
            values of our character, we have:
          </p>

          <p className="formula">
            ATK RTG = (100 * 3 + 106 * 2 + 100 * 1.2) + (184 + 106)
          </p>

          <p className="formula">ATK RTG = (300 + 212 + 120) + (290)</p>

          <p className="formula">ATK RTG = (632) + (290) = 922</p>

          <p>
            At the end of our calculations, we have the correct amount of ATK
            RTG that our character possesses that are 922 points. To calculate
            the HP we need the formula of HP, which must be the specific one for
            the class (in this case our character is a Knight), then follows the
            formula of Knight for HP used as an example:
          </p>

          <p className="formula">
            Knight HP = (Level * 2 + Health * 1.4 + Strength * 0.4 + Spirit *
            0.2 + Talent * 0.3 + Agility * 0.1) + ITEMS HP + QUEST ITEMS HP
          </p>

          <p>
            Our example character has 325 Strength points, 68 Spirit points, 100
            Talent points, 100 Agility points, and 100 Health points, and is
            level 106. &quot;ITEMS HP&quot; is the sum of all HP&apos;s that the
            items the character is currently wearing gives (this counts weapon,
            accessories, bracelets, powerups, etc.). For this example, our
            character does not have any item that gives HP, so we assume the
            value zero (0) for that field in the formula.
          </p>

          <p>
            The &quot;QUEST ITEM HP&quot; is the sum of all HP&apos;s additional
            quest items gives character has (if any). In our example, our
            character has two quests made: A level 40 (+15 HP) and level 90 (+40
            HP). Changing the formula to the values of our character, we have:
          </p>

          <p className="formula">
            Knight HP = (106 * 2) + (100 * 1.4) + (325 * 0.4) + (68 * 0.2) +
            (100 * 0.3) + (100 * 0.1) + (0) + (15 + 40)
          </p>
          <p className="formula">
            Knight HP = 212 + 140 + 130 + 13.6 + 30 + 10 + 0 + 55 = 590.6 = 590
          </p>

          <p>
            In our formula, the total was 590.6 HP (590 HP). The attribute
            values are always rounded down in the game, so if in the calculation
            the result was 590.6, we assumed it to be 590.
          </p>
        </div>
      }
    />
  );
};

export default BuildUpdate;
