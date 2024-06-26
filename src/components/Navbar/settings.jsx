import { React } from 'react';
import { Link } from 'react-router-dom';
import logoScrolled from '../../assets/img/logo-desk-navbar-scrolled.png';

const leftContent = [
  {
    text: 'Home',
    isLink: true,
    redirect: '/',
  },
  {
    text: 'Downloads',
    isLink: true,
    redirect: '/download',
  },
  {
    text: 'Game Guides',
    columns: [
      {
        options: [
          {
            text: 'Character Skills',
            isLink: true,
            redirect: '/character-skills',
          },
          {
            text: 'Experience Table',
            isLink: true,
            redirect: '/exp-table',
          },
          {
            text: 'Share Password System',
            isLink: true,
            redirect: '/share-password-system',
          },
          {
            text: 'Item Aging',
            isLink: true,
            redirect: '/item-aging',
          },
          {
            text: 'Glamorous Brush System',
            isLink: true,
            redirect: '/glamorous-brush-system',
          },
          {
            text: 'Build Update',
            isLink: true,
            redirect: '/build-update',
          },
          {
            text: 'Game Formulas',
            isLink: true,
            redirect: '/game-formulas',
          },
          {
            text: 'Clan System',
            isLink: true,
            redirect: '/clan-system',
          },
          {
            text: 'Pet Focus System',
            isLink: true,
            redirect: '/pet-focus-system',
          },
          {
            text: 'Force Orb',
            isLink: true,
            redirect: '/force-orb',
          },
          {
            text: 'Emoticon System',
            isLink: true,
            redirect: '/emoticon-system',
          },
          {
            text: 'Item Distributor',
            isLink: true,
            redirect: '/item-distributor',
          },
          {
            text: 'Item Respec',
            isLink: true,
            redirect: '/respec-item',
          },
          {
            text: 'Item Link',
            isLink: true,
            redirect: '/item-link',
          },
        ],
      },
    ],
  },
  {
    text: 'Rankings',
    isLink: true,
    redirect: '/ranking',
  },
  {
    text: 'Mix List',
    isLink: true,
    redirect: '/mix-list',
  },
  {
    text: 'Item List',
    isLink: true,
    redirect: '/item-list',
  },
  {
    text: 'Rules',
    columns: [
      {
        options: [
          {
            text: 'Rules of Conduct: Game',
            isLink: true,
            redirect: '/game-rules',
          },
          {
            text: 'Rules of Conduct: Discord',
            isLink: true,
            redirect: '/discord-rules',
          },
        ],
      },
    ],
  },
];

const rightContent = [
  {
    text: 'User Panel',
    isLink: true,
    redirect: 'https://user.regnum.world/userpanel/',
  },
];

export const schema = {
  logoOffScroll: (
    <h2 className="off-scroll">
      <Link to="/">
        <img src={logoScrolled} alt="Regnum"></img>
      </Link>
    </h2>
  ),
  logoOnScroll: (
    <h2 className="on-scroll">
      <Link to="/">
        <img src={logoScrolled} alt="Regnum"></img>
      </Link>
    </h2>
  ),
  logoMobile: (
    <h2 className="logo-mobile">
      <Link to="/">
        <img src={logoScrolled} alt="Regnum"></img>
      </Link>
    </h2>
  ),

  leftContent,
  rightContent,
};
