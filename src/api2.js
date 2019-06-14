import React from 'react';

import axios from 'axios';

export default class Score extends React.Component {
  state = {
    scores: []
  }

  componentDidMount() {
    axios.get(`http://auth.test/api_calendar_score`)
      .then(src => {
        const scores = src.data;
        this.setState({ scores });
      })
  }

  render() {
    return (
      <div className="score">
        <table class="table">
          <tr align="center">
            <td colspan="2">Score</td>
          </tr>
            {this.state.scores.map((score,index) => <tr align="center"><td key={index}>{score.prenom} {score.nom}</td><td>{score.count}</td></tr>)}
        </table>
      </div>
    )
  }
}