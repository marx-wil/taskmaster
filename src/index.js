import './styles/main.scss';

import React, { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { ColorModeScript } from '@chakra-ui/react';

import App from './App';
import Layout from './layouts/default';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Default from './views/default';
import Tables from './views/tables';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const DefaultView = Layout(Default);
const TableView = Layout(Tables);
const router = createBrowserRouter([
  { path: '/', element: <DefaultView /> },
  { path: '/about', element: <TableView /> },
]);
root.render(
  <StrictMode>
    <ColorModeScript />
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
