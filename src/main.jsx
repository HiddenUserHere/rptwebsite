import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from './routes/home';
import Download from './routes/download';
import ErrorPage from './routes/ErrorPage';
import Ranking from './routes/ranking';
import Notice from './routes/notice';


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "download",
        element: <Download />,
      },
      {
        path: "ranking",
        element: <Ranking />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
