import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './pages/Home/index.jsx';
import Download from './pages/Download/index.jsx';
import Ranking from './pages/Ranking/index.jsx';
import MixList from './pages/MixList/index.jsx';
import ItemList from './pages/ItemList/index.jsx';
import ExperienceTable from './pages/Guides/ExperienceTable/index.jsx';


const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      // Root guides
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'download',
        element: <Download/>,
      },
      {
        path: 'ranking',
        element: <Ranking/>,
      },
      {
        path: 'mix-list',
        element: <MixList/>,
      },
      {
        path: 'item-list',
        element: <ItemList/>
      },

      // Game guides
      {
        path: 'exp-table',
        element: <ExperienceTable/>,
      },
    ],
  },
]);

export default AppRoutes;