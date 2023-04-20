import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';

import './styles.css';

const ClanSystem = () => {
  return (
    <SimpleGuide
      pageTitle="Clan System"
      pageDescription={
        <div>
          Clan System is a feature of our game that allows players to join
          forces and form powerful clans. Clans are communities of players who
          come together to achieve common goals, such as conquering dungeons,
          engaging in epic battles, or dominating the leaderboards. It&apos;s a
          great way to build camaraderie, teamwork, and friendships within the
          game. Joining a clan offers a sense of belonging and purpose, as you
          work together with your fellow clan members towards shared objectives.
        </div>
      }
      guideTitle="Clan System"
      guideContent={
        <div className="guide-content">
          <h1>How to create a Clan?</h1>
          <ul>
            <li>
              To create a clan you first need to go to the Clan Master at
              Ricarten Town or Phillai Town.
            </li>
            <li>
              Click on him and he will offer you to make a new Clan. You have to
              be at least level 40.
            </li>
            <li>It costs 500.000 gold (500k) to create a clan.</li>
            <li>Then you have to name the Clan.</li>
            <li>
              You can put whatever you want as the Clan Name (unless it&apos;s
              already taken).
            </li>
            <li>Press &quot;O.K&quot; and you&apos;re done!</li>
            <li>
              After you are done creating the clan, its name will appear in your
              stats panel (press C)
            </li>
          </ul>
          <p>
            To invite someone you have to click on the character, and then click
            on the &quot;clan&quot; option beside &quot;Add Friend&quot;. The
            Character will get a Text box asking him to join your clan. If the
            character accepts the invitation, you will get a Text box saying he
            accepted.
          </p>
          <ul>
            <li>You only can invite players that are clanless.</li>
            <li>
              You can only invite a character who left his previous clan 1 day
              before.
            </li>
          </ul>
          <hr />
          <h1>How a Clan Leader can use the Clan Master</h1>
          <p className="underline">How to disband (delete) a clan?</p>
          <ul>
            <li>
              Visit the Clan Master and click on &quot;Disband&quot; in the
              menu.
            </li>
            <li>Click on the &quot;OK&quot; button to confirm.</li>
          </ul>
          <p className="underline">How to dismiss (kick) a member?</p>
          <ul>
            <li>
              Visit the Clan Master and click on &quot;Dismiss&quot; in the
              menu.
            </li>
            <li>
              Browse the member list and select the character you want to
              remove.
            </li>
            <li>
              Click on the &quot;OK&quot; button at the bottom of the window.
            </li>
            <li>Click on the &quot;Yes&quot; button to confirm.</li>
            <li>
              Repeat this process if you want to remove more than one member.
            </li>
          </ul>
          <p className="underline">How to delegate a new Clan Leader?</p>
          <ul>
            <li>
              Visit the Clan Master and click on &quot;Delegate&quot; in the
              menu.
            </li>
            <li>
              Browse the member list and select the character you want to
              delegate as new Leader.
            </li>
            <li>
              Click on the &quot;Delegate&quot; button at the bottom of the
              window.
            </li>
            <li>Click on the &quot;OK&quot; button to confirm.</li>
          </ul>
          <p className="underline">How to nominate a new Vice Leader?</p>
          <ul>
            <li>
              A Vice Leader is a normal clan member that only has the power to
              invite new members in the clan.
            </li>
            <li>
              Visit the Clan Master and click on &quot;Delegate&quot; in the
              menu.
            </li>
            <li>
              Browse the member list and select the character you want to
              nominate as new Vice Leader.
            </li>
            <li>
              Click on the &quot;OK&quot; button at the bottom of the window.
            </li>
            <li>Click on the &quot;Yes&quot; button to confirm.</li>
          </ul>
          <p className="underline">
            Are you lost ? Still need some help ingame?
          </p>
          <ul>
            <li>
              Visit the Clan Master and click on &quot;Help&quot; in the menu.
            </li>
            <li>A window with useful information will appear.</li>
            <li>Click on the &quot;OK&quot; button to close it.</li>
          </ul>
          <hr />
          <h1>The benefits of a Clan</h1>
          <p className="underline">Union Cores</p>
          <p>
            These scrolls are different from Ether Cores : they are blank. They
            are used for teleporting to people within the same clan. To use it,
            simple give it to a clanmate, let him &quot;sign&quot; it by
            right-clicking on it, and then give it back to you. You will notice
            that the Union Corenow has your clanmate&apos;s name on it. When you
            use it by right-clicking on it, you will be instantly teleported
            near him. Note: You can&apos;t teleport near him if he is in a map
            that doesn&apos;t match your level.
          </p>
          <p className="underline">Guardian Saint Crystal</p>
          <p>
            The Guardian Saint is a strong monster crystal, specially made for
            clans. To use this crystal you must be at least level 50 and a
            member of a clan. The Guardian Saint has many different skills, from
            area damage skills to one on one skills. You can heal your Guardian
            Saint by typing &quot;Yahoo&quot;. Only clan members of the summoned
            clan Guardian Saint can &quot;heal&quot; the Guardian Saint.
          </p>
          <p className="underline">Clan events</p>
          <p>
            Being in a clan you can participate in Bellatra ! Make a good clan
            team and try to make a better score than the others, and win the
            crown ! More information in the Bellatra guide page You can
            participate in Bless Clastle Siege ! Make a good strategy with your
            clan, and try to take the castle!
          </p>
          <br />
          <br />
          <hr />
          <h1>How to leave a Clan</h1>
          <ul>
            <li>
              To leave a clan, you must be a normal member, not leader (see
              &quot;how to delegate a new leader&quot; to become a normal
              member);
            </li>
            <li>
              Visit the Clan Master and click on &quot;Leave&quot; in the menu;
            </li>
            <li>
              Click the &quot;OK&quot; button at the bottom to confirm this;
            </li>
            <li>
              Note: you can only join a new clan one day after leaving your
              current clan. (Just after next midnight at server time).
            </li>
          </ul>
        </div>
      }
    />
  );
};

export default ClanSystem;
