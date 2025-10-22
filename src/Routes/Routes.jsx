import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import ErrorPage from '../pages/ErrorPage';
import InstallList from '../pages/InstallList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index:true,
        Component: Home,
        loader: () => fetch('./appData.json')
      },
      {
        path: "/app",
        Component: Apps
      },
      {
        path: "/install",
        Component: InstallList
      }
    ]
  },


]);