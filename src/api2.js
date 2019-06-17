import React from 'react';
import Progress from 'react-progressbar';
import axios from 'axios';

export default class Score extends React.Component {
  state = {
    scores: []
  }
  componentDidMount() {
    axios.get(`http://auth.test/api_calendar_score`)
      .then(src => {
        const scores = src.data;
        let total = 0;
        scores.forEach(score => {
          total+=Number(score.count);
        });
        this.setState({ scores });
        this.setState({ total });
      })
  }

  render() {
    const { scores, total } = this.state;
    return (
      <div className="score">
        <table class="table">
          <tr align="center">
            <td colspan="2">Score</td>
          </tr>
            {scores.map((score,index) => <tr align="center"><td key={index}>{score.prenom} {score.nom}</td><td>{score.count}/{total}<Progress completed={(score.count/total)*100}/></td></tr>)}
        </table>
      </div>
    )
  }
}