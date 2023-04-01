import { Link } from 'react-router-dom';

const leftContent = [
  {
    text: 'Home',
    isLink: true,
    redirect: '/'
  },
  {
    text: 'Downloads',
    isLink: true,
    redirect: '/download'
  },
  {
    text: 'Rankings',
    isLink: true,
    redirect: '/ranking',
  },
  {
    text: 'Game Guides', columns: [
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
            redirect: '/exp-table'
          }
        ]
      },
    ]
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
];

const rightContent = [
  {
    text: 'User Panel',
    isLink: true,
    redirect: 'https://user.regnum.world/userpanel/',
  }
];

export const schema = {
  logoOffScroll: (
    <h2 className="off-scroll">
      <Link to="/">
        <img src="src/assets/img/logo-desk-navbar-scrolled.png" alt="Regnum"></img>
      </Link>
    </h2>
  ),
  logoOnScroll: (
    <h2 className="on-scroll">
      <Link to="/">
        <img src="src/assets/img/logo-desk-navbar-scrolled.png" alt="Regnum"></img>
      </Link>
    </h2>
  ),
  logoMobile: (
    <h2 className="logo-mobile">
      <Link to="/">
        <img src="src/assets/img/logo-desk-navbar-scrolled.png" alt="Regnum"></img>
      </Link>
    </h2>
  ),

  leftContent,
  rightContent,
};