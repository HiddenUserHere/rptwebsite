import { Link } from 'react-router-dom';

// TODO
const NAVBAR_LOGO_1 = '';
const NAVBAR_LOGO_2 = '';
const NAVBAR_LOGO_3 = '';

const schema = {

  logo_1: <h2 className="off-scroll"><Link to="/"><img
    src="src/assets/img/logo-desk-navbar-scrolled.png"></img></Link></h2>,
  logo_2: <h2 className="on-scroll"><Link to="/"><img
    src="src/assets/img/logo-desk-navbar-scrolled.png"></img></Link></h2>,
  logo_3: <h2 className="logo-mobile"><Link to="/"><img src="src/assets/img/logo-desk-navbar-scrolled.png"></img></Link>
  </h2>,

  leftContent: [
    {
      text: 'Account', columns: [
        {
          options: [
            {
              text: 'Register', isLink: true, redirect: '/notice'
            },
            {
              text: 'User Panel', isLink: true, redirect: '/notice'
            },
            {
              text: 'Donate', isLink: true, redirect: '/notice'
            }
          ]
        },
      ]
    },

    {
      text: 'Guia', columns: [
        {
          options: [
            {
              text: 'Mixing', isLink: true, redirect: '/notice'
            },
            {
              text: 'Craft', isLink: true, redirect: '/notice'
            },
            {
              text: 'Aging', isLink: true, redirect: '/notice'
            },
            {
              text: 'Hells\'Gate', isLink: true, redirect: '/notice'
            },
            {
              text: 'Bellatra', isLink: true, redirect: '/notice'
            },
            {
              text: 'Item Guide', isLink: true, redirect: '/notice'
            },
            {
              text: 'Monsters', isLink: true, redirect: '/notice'
            }

          ]
        },
      ]
    },

    {text: 'Downloads', isLink: true, redirect: '/download'},
    {text: 'Ranking', isLink: true, redirect: '/ranking'}
  ],
  rigthContent: []
};

export default schema;