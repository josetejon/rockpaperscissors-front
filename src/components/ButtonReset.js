import React from 'react'
import './../styles/ButtonPlay.css'
import 'bootstrap/dist/css/bootstrap.css'
import CurrentStats from './CurrentStats';
import ReactDOM from 'react-dom';

class ButtonReset extends React.Component {
  handleClick(){
  var currentRounds = document.getElementById("CurrentStats");
  currentRounds.setAttribute("currentRounds", "10");
  }
  render() {
    return (
      <div class="container">
        <div class="center">
          <button onClick={this.handleClick}>Reset</button>
        </div>
      </div>
    )
  }
};

export default ButtonReset