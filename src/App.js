import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputText: '',
    inputLength: 0
  }


  deleteCharHandler = (charIndex) => {
    const chars = this.state.inputText.split('');
    chars.splice(charIndex, 1)

    this.setState({
      inputText: chars.join(''),
      inputLength: chars.length
    })
  }

  inputChangedHandler = (event, id) => {
    this.setState({
      inputText: event.target.value,
      inputLength: event.target.value.length
    })
  }

  render() {
    let chars = (
        <div>
          {this.state.inputText.split('').map(
              (alphabet, index) => <CharComponent text={alphabet} click={() => this.deleteCharHandler(index)}/>
          )}
        </div>
    )
    return (
      <div className="App">
        <input type='text' className="form-control" onChange={this.inputChangedHandler} value={this.state.inputText}/>
        <p className="form-control">{this.state.inputLength}</p>
        <ValidationComponent textLength={this.state.inputLength}/>
        {chars}
      </div>
    );
  }
}

export default App;
