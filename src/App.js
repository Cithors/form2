import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Agenda from './calendrier2';
import User from './api';
import Pastries from './api3';
import Abs from './abs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Wizards Technologies petit-déj</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/user'} className="nav-link">Utilisateurs</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/pastries'} className="nav-link">Viennoiseries</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/calendrier'} className="nav-link">Calendrier</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/absences'} className="nav-link">Absences</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
        </div>
        <Switch>
              <Route exact path="/" component={ Login } />
              <Route exact path='/user' component={ User } />
              <Route path='/pastries' component={ Pastries } />
              <Route path='/calendrier' component={ Agenda } />
              <Route path='/absences' component={ Abs } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;