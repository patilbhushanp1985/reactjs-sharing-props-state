import React, { Component } from 'react';

class CounterPropComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {step: props.stepValue, init: props.initValue};
    this.handleClick = this.handleState.bind(this);
  }

  subFunctionCalling(message) {
    console.log('Update me this ' + this.state.step);
    alert(message);
  }

  handleState() {
    let initValue = this.state.init + this.state.step;
    let stepValue = this.state.step * 2;
    this.setState({ init: initValue, step: stepValue });
    this.subFunctionCalling('Hello World');
  }  

  render() {
    return <div>
              Counter Property initValue <p>{this.props.initValue}</p>
                  and
              Counter Property stepValue <p>{this.props.stepValue}</p>
              State init  initValue <p>{this.state.init}</p>
                  and
              State got  stepValue <p>{this.state.step}</p>
              <button onClick={this.handleClick}>
                Click Me
              </button>
            </div>;
  }
}

export default CounterPropComponent;
