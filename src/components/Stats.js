import React from 'react'
import axios from 'axios';

class Stats extends React.Component{

  state = {totalRounds: "", playerOneTimes: "", playerTwoTimes: "", draws: ""};


  async componentDidMount(){
    var totalRounds = this.state.totalRounds;
    var playedOneTimes = this.state.playerOneTimes;
    var playerTwoTimes = this.state.playerTwoTimes;
    var draws = this.state.draws;
    axios.get('http://localhost:8080/getStats')
    .then(res => {
      console.log(res);
      console.log(res.data);
      totalRounds = res.data.total;
      playedOneTimes = res.data.playerOneWon;
      playerTwoTimes = res.data.playerTwoWon;
      draws = res.data.draws;
      this.setState({totalRounds: totalRounds, playerOneTimes: playedOneTimes, playerTwoTimes: playerTwoTimes, draws: draws});
    });
  }

  render(){
    return (
      <div align="center">
      <div class="table">
        <table>
          <tr>
            <th>Total Rounds Played</th>
            <th>Player one champions times</th>
            <th>Player two champions times</th>
            <th>Total draws</th>
          </tr>
         <tr>
            <td>{this.state.totalRounds}</td>
            <td>{this.state.playerOneTimes}</td>
            <td>{this.state.playerTwoTimes}</td>
            <td>{this.state.draws}</td>
          </tr>
        </table>
      </div>
      </div>
)
}
}

export default Stats