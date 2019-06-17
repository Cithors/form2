import React from 'react';

import axios from 'axios';

export default class User extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://auth.test/api_calendar`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <table class="table">
          <tr align="center">
            <td>Nom</td>
            <td>Prénom</td>
            <td>Date et heure de départ</td>
            <td>Date et heure de fin</td>
          </tr>
        { users.map((user, index) => <tr align="center"><td key={index}>{user.nom}</td><td>{user.prenom}</td><td>{user.date.date}</td><td>{user.end.date}</td></tr>)}
        </table>
      </div>
    )
  }
}