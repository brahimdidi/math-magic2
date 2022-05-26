import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handler = this.handler.bind(this);
  }

  handler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calculator">
        <div className="input">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-buttons">
          <button onClick={this.handler} type="button">AC</button>
          <button onClick={this.handler} type="button">+/-</button>
          <button onClick={this.handler} type="button">%</button>
          <button onClick={this.handler} className="bg-orange" type="button">÷</button>
          <button onClick={this.handler} type="button">7</button>
          <button onClick={this.handler} type="button">8</button>
          <button onClick={this.handler} type="button">9</button>
          <button onClick={this.handler} className="bg-orange button-x" type="button">x</button>
          <button onClick={this.handler} type="button">4</button>
          <button onClick={this.handler} type="button">5</button>
          <button onClick={this.handler} type="button">6</button>
          <button onClick={this.handler} className="bg-orange" type="button">-</button>
          <button onClick={this.handler} type="button">1</button>
          <button onClick={this.handler} type="button">2</button>
          <button onClick={this.handler} type="button">3</button>
          <button onClick={this.handler} className="bg-orange" type="button">+</button>
          <button onClick={this.handler} className="button-0" type="button">0</button>
          <button onClick={this.handler} type="button">.</button>
          <button onClick={this.handler} className="bg-orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
