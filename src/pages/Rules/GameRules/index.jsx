import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';
import '../styles.css';

const GameRules = () => {
  return (
    <SimpleGuide
      pageTitle="Rules of Conduct: Game"
      pageDescription={
        <div>
          Our Game Rules section is a comprehensive guide to the rules and
          regulations of our game. It provides a detailed overview of our
          policies regarding gameplay, communication, and conduct, as well as
          the consequences of violating those policies. By reading through our
          Game Rules section, you&apos;ll gain a clear understanding of what is
          and is not allowed in our virtual world, ensuring that you and your
          fellow players have a safe and enjoyable experience. We take our rules
          seriously, and we expect all our players to abide by them at all
          times. So please read through our Game Rules section carefully and
          play fair!
        </div>
      }
      guideTitle="Rules of Conduct: Game"
      guideContent={
        <div className="rules">
          <p>
            The following rules govern basic interaction on Regnum World. Please
            be aware that failure to comply with these rules may lead to
            punishment by banning your account from the game. Below are listed
            all the game rules, that can be modified without notice.
          </p>

          <h1>1. Respect - Respect other users</h1>
          <p>
            You must respect others as well as their rights to play and enjoy
            the game. For this to happen, you must not disturb, defraud,
            humiliate, threaten, or cause any type of stress and/or unwanted
            attention to other players. All players must be as polite as
            possible - immaturity and childish behavior can lead to punishment.
          </p>

          <h1>2. Offenses - Don&apos;t make hateful comments</h1>
          <p>
            You must not use any kind of offensive, threatening, hateful or
            racist language to personally attack other users. You can provoke
            your opponents if it causes healthy competition. Any type of bad
            language that is considered unacceptable by Staff will be punished.
          </p>

          <h1>
            3. Impersonating Staff - Don&apos;t pretend to be a Staff Member
          </h1>
          <p>
            Never impersonate any member of the Staff or pretend to be a member
            of it to take advantage of other people. Breaking this rule can lead
            to a permanent ban.
          </p>

          <h1>4. Trade Chat - Don&apos;t spam the Trade Chat</h1>
          <p>
            When using Trade or Global Chat, avoid using it for spamming or for
            unnecessary conversations. This can lead to punishment if done
            repeatedly and seen by a staff member in the game.
          </p>

          <h1>5. Cheating - Do not use anything illegal to gain advantages</h1>
          <p>
            You must not use any unauthorized programs that directly or
            indirectly influence the server&apos;s way of playing. Thus, you
            cannot use any type of cheat program and so on. You must also not
            modify any part of the Regnum World client to gain advantages.
          </p>

          <h1>6. Bug abuse - Don&apos;t abuse bugs to gain advantages</h1>
          <p>
            You must not abuse any type of game bug to gain unfair advantages.
            However, if you accidentally abuse a bug you must report it
            immediately on our discord.
          </p>

          <h1>
            7. Scamming - Do not use &apos;scams&apos; towards other players
          </h1>
          <p>
            You must not abuse other players with false promises to steal your
            items, account information (like ID and password) or anything like
            that. Breaking this rule can result in your complete exclusion from
            the game.
          </p>

          <h1>8. Kill Stealing (KS) - Don&apos;t give KS to other players</h1>
          <p>
            Giving KS is an offense and can lead to punishment (this rule does
            not apply to bosses or event monsters). It is the users&apos;
            responsibility to prove that spawn is theirs or not, and we assume
            that it is nobody&apos;s until proven otherwise. If a user(s) cannot
            prove that the spawn was empty before the arrival of the other
            players, their claim in the case will be denied.
          </p>
          <br />
          <p>
            If both the accusing and the defending parties cannot prove
            anything, the entire case will be denied. If a player does not
            respond for 5 minutes or more (AFK), then he is out of place and the
            spawn will be free for anyone to take possession of him. Proving
            this is the total responsibility of the user, and intervals of less
            than 5 minutes without answers will not be considered and in this
            situation, they can be reported for giving KS, thus being punished.
          </p>
          <p>
            If a user appears to be present through a response or action after 5
            minutes, he is considered the KS and may be punished.
          </p>

          <h1>
            9. Exchanges involving real money - Do not sell, buy or exchange
            anything from Regnum World for real money
          </h1>
          <p>
            It is strictly forbidden to sell something from the game or related
            to Regnum World for real money or exchange for content from other
            PristonTale servers or any other game server.
          </p>
          <br />
          <p>
            You can only sell content from Regnum World for gold or coins from
            the game or exchange for other content from the server itself
            (items, accounts, so on). Exchanging Regnum World content (such as
            accounts or items) for content outside Regnum World is strictly
            prohibited and may lead to punishment.
          </p>
          <br />
          <p>
            Advertising to commit the act of buying or selling game content for
            real money or outside of the donation system will lead to
            punishment.
          </p>

          <h1>10. Advertise - Do not promote or advertise in-game</h1>
          <p>
            Do not disclose your mobile number, address, or websites for other
            games.
          </p>

          <h1>
            11. Share of Main Password – Does not share your main password.
          </h1>
          <p>
            Users should not share their main account passwords, as they can
            give full access to it (access to the user panel and all account
            in-game functionalities). Instead, they should use the Share
            Password System to give someone temporary access to his account.
          </p>
          <br />
          <p>
            Sharing of account password in Regnum World without using the Share
            Password System is not allowed and if the user has a loss of items,
            gold/coins or account it will not be supported/recovered.
          </p>
          <br />
          <h1>
            Note: All support cases, including Report User, Recovering,
            Technical should follow the correct guidelines of their sections.
            Reports/Cases that do not follow the guidelines can be deleted
            without further notice.
          </h1>
          <h1>
            An important rule in online games is that players cannot leave their
            characters in macro and AFK (away from the keyboard) for extended
            periods of time. This means they cannot use programs or macros to
            automatically perform repetitive actions while away from the
            keyboard.
          </h1>
          <h1>
            This rule is important to ensure fairness and fun for all players.
            If a player uses a macro program to automate actions, he or she may
            gain unfair advantages over other players, such as earning money or
            items effortlessly. Furthermore, leaving the character AFK can
            detract from other players&apos; gameplay experience, especially if
            the character is blocking a hotspot or an important area of the
            game.
          </h1>
        </div>
      }
    />
  );
};

export default GameRules;
