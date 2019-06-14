import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Form from './Form';
import User from './api';
import Score from './api2';
import Pastries from './api3';
import Agenda from './calendrier2';

class App extends React.Component {
  render() {
    return (
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
                  <Link to={'/score'} className="nav-link">Score</Link>
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
          <div>
            <Agenda />
          </div>
          <Switch>
              <Route exact path='/user' component={ User } />
              <Route path='/score' component={ Score } /> 
              <Route path='/pastries' component={ Pastries } />
              <Route path='/calendrier' component={ Agenda } />
              <Route path='/formulaire' component={ Form } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;