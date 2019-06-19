import React from 'react';

import axios from 'axios';

export default class User extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://auth.test/api_abs`)
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
            <td>Date de départ</td>
            <td>Date de fin</td>
            <td>Nature</td>
            <td>Statut</td>
          </tr>
        { users.map((user, index) => <tr align="center"><td key={index}>{user.lastname}</td><td>{user.name}</td><td>{user.start}</td><td>{user.end}</td><td>{user.nature}</td><td>{user.status}</td></tr>)}
        </table>
      </div>
    )
  }
}