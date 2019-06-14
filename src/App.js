import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Agenda from './calendrier2';
import User from './api';
import Pastries from './api3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
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
                  <Link to={'/formulaire'} className="nav-link">Formulaire</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
        </div>
        <Switch>
              <Route exact path='/user' component={ User } />
              <Route path='/pastries' component={ Pastries } />
              <Route path='/calendrier' component={ Agenda } />
              <Route path='/formulaire' component={ Form } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;