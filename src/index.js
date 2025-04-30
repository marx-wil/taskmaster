import React, { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import {
  ChakraProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import './styles/poppin.scss';
// landingpage layout
import LandingLayout from './layouts/landingpage';
// dashboard layout
import Layout from './layouts/default';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Calendar from './views/system/calendar';
import Dashboard from './views/system/dashboard';
import Forms from './views/system/forms';
import Progress from './views/system/progress';
import Tables from './views/system/tables';
import Projects from './views/system/projects';
import Project from './views/system/project';
import Activity from './views/system/activity';
import Settings from './views/system/settings';
import MyAccount from './views/system/myaccount';
import LandingPage from './views/landingpage';
import LoginPage from './views/login';
import RegisterPage from './views/register/index.js';
import TeamPage from "./views/system/team/"
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const MainComponent = Layout(Dashboard);
const TableComponent = Layout(Tables);
const CalendarComponent = Layout(Calendar);
const ProgressComponent = Layout(Progress);
const FormsComponent = Layout(Forms);
const ProjectsComponent = Layout(Projects);
const ProjectComponent = Layout(Project);
const ActivityComponent = Layout(Activity);
const SettingsComponent = Layout(Settings);
const MyAccountComponent = Layout(MyAccount);
const TeamComponent = Layout(TeamPage)
const LandingPageComponent = LandingLayout(LandingPage);
const router = createBrowserRouter([
  { path: '/', element: <LandingPageComponent /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/taskmaster', element: <MainComponent /> },
  { path: '/taskmaster/projects', element: <ProjectsComponent /> },
  { path: '/taskmaster/project/:id', element: <ProjectComponent /> },
  { path: '/taskmaster/calendar', element: <CalendarComponent /> },
  { path: '/taskmaster/activity', element: <ActivityComponent /> },
  { path: '/taskmaster/settings', element: <SettingsComponent /> },
  { path: '/taskmaster/account', element: <MyAccountComponent /> },
  { path: '/taskmaster/tables', element: <TableComponent /> },
  { path: '/taskmaster/progress', element: <ProgressComponent /> },
  { path: '/taskmaster/forms', element: <FormsComponent /> },
  { path: '/taskmaster/settings', element: <SettingsComponent /> },
  { path: '/taskmaster/team', element: <TeamComponent /> },

]);
root.render(
  <ChakraProvider>
    <RouterProvider router={router}>
      <StrictMode>
        <ColorModeScript />
      </StrictMode>
    </RouterProvider>
  </ChakraProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
