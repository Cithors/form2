import React from 'react';

import axios from 'axios';

export default class Pastries extends React.Component {
  state = {
    pastries: []
  }

  componentDidMount() {
    axios.get(`http://auth.test/api_list`)
      .then(src => {
        const pastries = src.data;
        this.setState({ pastries });
      })
  }

  render() {
    return (
      <div>
        <table class="table">
          <tr>
            <td align="center" colspan="2">Préférences</td>
          </tr>
            {this.state.pastries.map((pastrie,index) => <tr align="center"><td key={index}>{pastrie.count}</td><td>{pastrie.nom }</td></tr>)}
        </table>
      </div>
    )
  }
}