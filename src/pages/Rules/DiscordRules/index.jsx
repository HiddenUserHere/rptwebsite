import React from 'react';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';
import '../styles.css';

const DiscordRules = () => {
  return (
    <SimpleGuide
      pageTitle="Rules of Conduct: Discord"
      pageDescription={ (
        <div>
          Discord Rules section is a guide to the rules and regulations of our Discord community. It provides a
          clear overview of our policies regarding communication, behavior, and conduct, as well as the consequences of
          violating those policies. By reading through our Discord Rules section, you'll gain a clear understanding of
          what is and is not allowed in our community, ensuring that you and your fellow Discord users have a positive
          and respectful experience. We take our rules seriously, and we expect all our members to abide by them at all
          times. So please read through our Discord Rules section carefully and be respectful to your fellow community
          members.
        </div>
      ) }
      guideTitle="Rules of Conduct: Discord"
      guideContent={ (
        <div className="rules">
          <p>
            The following rules must be followed by all users (Regnum’s Community) of Discord, without exceptions, and
            these must be applied by Members of Staff or Moderators.
          </p>

          <h1>1. Respect – Respect other users</h1>
          <p>
            Respect other users so that you can earn their respect. You must respect everyone’s opinion, even if you
            don’t
            agree with them. You have the right to express your opinion and show others why they may be wrong, but don’t
            insult other users while doing this. Their views can be peacefully discussed. Any kind of disrespect will
            not
            be tolerated.
          </p>

          <h1>2. Criticism – Criticize constructively</h1>
          <p>
            If you want to criticize someone’s suggestion or work, or even the server himself, you should do it
            constructively. Criticizing is allowed, but it must be constructive criticism. Destructive criticism is
            useless and frowned upon. As well as it will not be tolerated if it is done repeatedly or intentionally to
            disrupt the experience of other people here.
          </p>

          <h1>3. Offenses – Don’t make offensive comments</h1>
          <p>
            Views or opinions that are generally considered offensive, racist, sexist or hateful will be subject to
            moderation and punishment. Staff and Moderators are trying to provide a somewhat free environment where they
            can share their opinions, but if their opinions or the way they are expressed are offensive to others, in
            general, action will be taken against the aggressor. Make use of common sense.
          </p>

          <h1>4. Judging Staff – Don’t judge the actions of Staff members in public</h1>
          <p>
            Do not make public topics, posts, messages or polls to judge the actions of a Staff member. If you feel that
            something is wrong, then feel free to send a personal message (PM) explaining the issue to the Staff Member,
            Moderators or one of the other Administrators and we will take care of that. We reserve the right to block
            or
            exclude any topic/post/message of this nature without an explanation.
          </p>

          <h1>5. Inappropriate Material – Don’t post pornography</h1>
          <p>
            Material considered inappropriate by Staff is subject to moderation and the user may be punished if it was
            intentional. This material includes images, links, videos, etc.
          </p>

          <h1>6. Illegal Material – Don’t post illegal software</h1>
          <p>
            Any theme that contains exploits or makes use of illegal material is considered illegal here as well.
            Ordering
            or publishing illegal software is strictly prohibited.
          </p>

          <h1>7. Understanding – Make use of English</h1>
          <p>
            Use only English in all areas and channels except for the specific language areas. Foreign-language topics,
            messages, and posts can be deleted without notice.
          </p>

          <h1>8. Spamming – Don’t post completely useless messages</h1>
          <p>
            Spamming (posting useless messages throughout the forum or discord) is strictly prohibited in all areas
            except in the areas designated for spamming (Battle Arena, Spam Chat, etc.).
          </p>

          <h1>9. Advertising – Don’t promote or advertise</h1>
          <p>
            Any type of advertising not related to RegnumPT is prohibited. Any kind of content that breaks this rule
            will be moderated and the user punished.
          </p>

          <h1>10. Counterfeiting – Don’t try to falsify or hide information from the Staff</h1>
          <p>
            You should not attempt to deceive Staff with false information or withhold information that is important
            for your benefit. Breaking this rule can result in punishment.
          </p>
        </div>
      ) }
    />
  );
};

export default DiscordRules;