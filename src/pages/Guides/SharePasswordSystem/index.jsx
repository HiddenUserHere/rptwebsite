import React from 'react';
import image01 from '../../../assets/img/guides/share-password/01.png';
import image02 from '../../../assets/img/guides/share-password/02.png';
import image03 from '../../../assets/img/guides/share-password/03.png';
import image04 from '../../../assets/img/guides/share-password/04.png';
import image05 from '../../../assets/img/guides/share-password/05.png';
import image06 from '../../../assets/img/guides/share-password/06.png';
import image07 from '../../../assets/img/guides/share-password/07.jpg';
import image08 from '../../../assets/img/guides/share-password/08.jpg';
import SimpleGuide from '../../../components/SimpleGuide/index.jsx';
import './styles.css';

const SharePasswordSystem = () => {
  return (
    <SimpleGuide
      pageTitle="Share Password"
      pageDescription={
        <div>
          Our Share Password System is a unique feature of our game that allows
          players to share their account passwords with friends and guild mates
          without compromising their main password. With this system, you can
          create a temporary password that can be shared with your trusted
          companions, allowing them to access your account for a limited time.
          You can also set permissions for each user, so they can only access
          certain parts of your account, such as your inventory or warehouse.
        </div>
      }
      guideTitle="Share Password"
      guideContent={
        <div className="guide-content">
          <p>
            Share Password is a system that allows you to set a temporary
            password for your game account. This can be useful for players who
            want his friends or clanmates to log in into their characters for
            some game events or for help leveling, for example. To set up a
            share password for your account, first make sure it is logged off
            in-game and go to User Panel.
          </p>

          <img src={image01} width="1000px" />

          <p>
            After logging in, select on the left navigation menu Share Password
            option.
          </p>

          <img src={image02} width="1000px" />

          <p>
            When you open it, you will notice there is a box showing the current
            status of Share Password for your account. If it is activated in
            your account, it will show the remaining time until the expiration -
            and you remove/disable the Share Password set previously from here.
          </p>

          <img src={image03} width="1000px" />

          <p>
            To set up a Share Password, simply go to Login sub-pane and enter a
            password in the input box named &ldquo;Share Password&rdquo;. This
            password should be a low length password and also make sure this
            password is different from your current account password and then
            select how many days the password should last in the &ldquo;Expires
            in&rdquo; selector.
          </p>

          <img src={image04} width="1000px" />

          <p>
            In the Permissions box, you will find there&apos;s plenty of options
            to disable for your account. By security, the login into User Panel
            and Creation/Deletion of Characters is disabled. Also, some options
            are enabled by default, and you can uncheck them if you want. Select
            the permissions for the password and then click in &ldquo;Set a
            Share Password&rdquo;.
          </p>

          <img src={image05} width="1000px" />

          <img src={image06} width="1000px" />

          <p>
            You will notice the box will change with the modified actions and
            from there is possible to see how many days/hours/minutes/seconds
            left until the password expires. From the Main Page of User Panel,
            in the Profile tab is possible to see if there is any Share Password
            active and the expiration date.
          </p>

          <img src={image07} width="1000px" />

          <img src={image08} width="1000px" />

          <p>
            When you log in an account using the Share Password, a message will
            be shown informing that you&apos;re logged in with Share PW. Your
            account will have full of permissions in-game except the options you
            disabled previously on User Panel.
          </p>

          <p>
            You should log off in-game first before makes any change for any
            Share Password set - also you can kick a user online into your
            account using panel. When you make any change to your game account
            such as change password or e-mail address, the Share Password set
            previously is canceled.
          </p>
        </div>
      }
    />
  );
};

export default SharePasswordSystem;
