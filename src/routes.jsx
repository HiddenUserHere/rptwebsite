import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import ErrorPage from './routes/ErrorPage.jsx';

import Home from './pages/Home/index.jsx';
import Download from './pages/Download/index.jsx';
import ItemList from './pages/ItemList/index.jsx';
import MixList from './pages/MixList/index.jsx';
import Ranking from './pages/Ranking/index.jsx';
import DiscordRules from './pages/Rules/DiscordRules/index.jsx';
import GameRules from './pages/Rules/GameRules/index.jsx';

import CharacterSkills from './pages/Guides/CharacterSkills/index.jsx';
import SharePasswordSystem from './pages/Guides/SharePasswordSystem/index.jsx';
import ExperienceTable from './pages/Guides/ExperienceTable/index.jsx';
import ItemAging from './pages/Guides/ItemAging/index.jsx';
import GlamorousBrushSystem from './pages/Guides/GlamorousBrushSystem/index.jsx';
import BuildUpdate from './pages/Guides/BuildUpdate/index.jsx';
import GameFormulas from './pages/Guides/GameFormulas/index.jsx';
import ClanSystem from './pages/Guides/ClanSystem/index.jsx';
import PetFocusSystem from './pages/Guides/PetFocusSystem/index.jsx';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // Root guides
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'download',
        element: <Download />,
      },
      {
        path: 'ranking',
        element: <Ranking />,
      },
      {
        path: 'mix-list',
        element: <MixList />,
      },
      {
        path: 'item-list',
        element: <ItemList />,
      },

      // Game guides
      {
        path: 'exp-table',
        element: <ExperienceTable />,
      },
      {
        path: 'character-skills',
        element: <CharacterSkills />,
      },
      {
        path: 'share-password-system',
        element: <SharePasswordSystem />,
      },
      {
        path: 'item-aging',
        element: <ItemAging />,
      },
      {
        path: 'glamorous-brush-system',
        element: <GlamorousBrushSystem />,
      },
      {
        path: 'build-update',
        element: <BuildUpdate />,
      },
      {
        path: 'game-formulas',
        element: <GameFormulas />,
      },
      {
        path: 'clan-system',
        element: <ClanSystem />,
      },
      {
        path: 'pet-focus-system',
        element: <PetFocusSystem />,
      },

      // Rules
      {
        path: 'discord-rules',
        element: <DiscordRules />,
      },
      {
        path: 'game-rules',
        element: <GameRules />,
      },
    ],
  },
]);

export default AppRoutes;
