import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import ErrorPage from '../pages/ErrorPage';
import InstallList from '../pages/InstallList';
import AppDetails from '../pages/AppDetails';
import LoadingSpinner from '../components/LoadingSpinner';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index:true,
        Component: Home,
      },
      {
        path: "/app",
        Component: Apps,
      },
      {
        path: "/install",
        Component: InstallList,
      },
      {
        path: '/appDetails/:id',
        Component: AppDetails,
      }
    ]
  },


]);