import React from 'react'
import './../styles/TablesClass.css'
import 'bootstrap/dist/css/bootstrap.css'

class CurrentStats extends React.Component {

    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {currentRounds: '0'};
  }

    handleClick(){
      var currentRounds = this.state.currentRounds;
      currentRounds = 8;
      this.setState({currentRounds: currentRounds});
  }
  render(){
    return (
    <div>
    <div class="table" align="center">
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
      <div class="center">
        <button onClick={this.handleClick}>Reset Rounds</button>
      </div>
    </div>
    </div>
    )
  }
};

export default CurrentStats