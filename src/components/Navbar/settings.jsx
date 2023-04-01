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
    text: 'Game Guides', columns: [
      {
        options: [
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
  {
    text: 'Ranking',
    isLink: true,
    redirect: '/ranking',
  }
];

const rightContent = [];

export const schema = {
  logoOffScroll: (
    <h2 className="off-scroll">
      <Link to="/">
        <img src="../../assets/img/logo-desk-navbar-scrolled.png" alt="Regnum"></img>
      </Link>
    </h2>
  ),
  logoOnScroll: (
    <h2 className="on-scroll">
      <Link to="/">
        <img src="../../assets/img/logo-desk-navbar-scrolled.png" alt="Regnum"></img>
      </Link>
    </h2>
  ),
  logoMobile: (
    <h2 className="logo-mobile">
      <Link to="/">
        <img src="../../assets/img/logo-desk-navbar-scrolled.png" alt="Regnum"></img>
      </Link>
    </h2>
  ),

  leftContent,
  rightContent,
};