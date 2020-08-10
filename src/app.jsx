import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';

import EventNewPage from 'pages/EventNewPage';
import ClubNewPage from 'pages/ClubNewPage';
import Home from 'pages/Home';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import CreateTeam from 'pages/TeamNewPage';
import AdminCoachDashboardPage from 'pages/adminCoachDashboardPage';
import GameShowPage from 'pages/GameShowPage';
import ShowTeam from 'pages/showTeam';
import ShowPractice from 'pages/showPractice';
import PlayerDashboardPage from 'pages/PlayerDashboardPage';
import Profile from 'pages/profile';

import Navbar from 'components/layouts/navbar';
import PrivateRoute from 'components/privateRoute';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

import 'styles/form.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/dashboardAdmin" component={AdminCoachDashboardPage} />
        <PrivateRoute exact path="/dashboardPlayer" component={PlayerDashboardPage} />
        <PrivateRoute exact path="/newTeam" component={CreateTeam} />
        <PrivateRoute exact path="/eventNewPage" component={EventNewPage} />
        <PrivateRoute exact path="/newClub" component={ClubNewPage} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/clubs/:clubId/teams/:teamId" component={ShowTeam} />
        <PrivateRoute exact path="/games/:gamesId" component={GameShowPage} />
        <PrivateRoute exact path="/practices/:practicesId" component={ShowPractice} />
        <Route path="/clubs/:clubId/teams/:teamId/players/:playerId" component={Profile} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
