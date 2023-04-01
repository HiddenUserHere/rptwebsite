import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/home.jsx';
import Download from './pages/Download/index.jsx';
import Ranking from './pages/Ranking.jsx';
import Notice from './routes/notice.jsx';

const AppRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
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
        path: 'notice',
        element: <Notice/>,
      },
    ],
  },
]);

export default AppRoutes;