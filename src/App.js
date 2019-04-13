import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterPropComponent from './counter-prop-component/counter-prop-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sending Properties from Component
          </p>
        </header>
        <CounterPropComponent stepValue={101} initValue={100}></CounterPropComponent>
      </div>
    );
  }
}

export default App;
