import React from 'react'
import axios from 'axios';
import './../styles/TablesClass.css'
import 'bootstrap/dist/css/bootstrap.css'

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.handleClickReset = this.handleClickReset.bind(this)
    this.handleClickPlay = this.handleClickPlay.bind(this)
    this.state = {currentRounds: '0', playerOneMovement: "", playerTwoMovement: "", winner: ""};
  }

  handleClickReset(e){
    var currentRounds = this.state.currentRounds;
    var playerOneMovement = this.state.playerOneMovement;
    var playerTwoMovement = this.state.playerTwoMovement;
    var winner = this.state.winner;
    e.preventDefault();
    playerOneMovement = "";
    playerTwoMovement = "";
    winner = "";
    currentRounds = 0;
   this.setState({currentRounds: currentRounds, playerOneMovement: playerOneMovement, playerTwoMovement: playerTwoMovement, winner: winner});
  }

  handleClickPlay(e){
    e.preventDefault();
    var currentRounds = this.state.currentRounds;
    var playerOneMovement = this.state.playerOneMovement;
    var playerTwoMovement = this.state.playerTwoMovement;
    var winner = this.state.winner;
    const request = {
      playerOne: "PlayerOne",
      playerTwo: "PlayerTwo",
      movementPO: "rock",
      movementPT: ""
    };
    
      axios.post('http://localhost:8080/play',
        request )
      .then(res => {
        console.log(res);
        console.log(res.data);
        winner = res.data.winner;
        playerOneMovement = res.data.movementPO;
        playerTwoMovement = res.data.movementPT;
        currentRounds = parseInt(currentRounds) + 1;
        this.setState({currentRounds: currentRounds, playerOneMovement: playerOneMovement, playerTwoMovement: playerTwoMovement, winner: winner});
      });
    }

    handleClickShowStats(e){
      e.preventDefault();
      window.open('http://localhost:3000/stats')
    }

  render(){
    return (
      <div align="center">
      <div class="table">
        <table>
          <tr>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Winner</th>
          </tr>
         <tr>
            <td>{this.state.playerOneMovement}</td>
            <td>{this.state.playerTwoMovement}</td>
            <td>{this.state.winner}</td>
          </tr>
        </table>
      </div>
      <div class="container">
        <div>
          <button onClick={this.handleClickPlay} class="btn btn-primary">PLAY GAME!</button>
        </div>
      </div>
      <div class="table">
        <table>
          <tr>
            <th>ROUNDS</th>
          </tr>
          <tr>
            <td>{this.state.currentRounds}</td>
          </tr>
        </table>
      </div>
      <div class="container">
        <div>
          <button onClick={this.handleClickReset} class="btn btn-primary mb-1">Reset Rounds</button>
        </div>
      </div>
      <footer class="container">
        <div>
          <button onClick={this.handleClickShowStats} class="btn btn-outline-primary ">Show Stats</button>
        </div>
      </footer>
      </div>
    )
  }
};

export default Game