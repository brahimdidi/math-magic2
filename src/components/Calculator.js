import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handler = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  const { total, operation, next } = state;
  return (
    <section className="calculator-section">
      <div className="title">Let&#39;s do some Math!</div>
      <div className="calculator">
        <div className="input">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-buttons">
          <button onClick={handler} type="button">AC</button>
          <button onClick={handler} type="button">+/-</button>
          <button onClick={handler} type="button">%</button>
          <button onClick={handler} className="bg-orange" type="button">÷</button>
          <button onClick={handler} type="button">7</button>
          <button onClick={handler} type="button">8</button>
          <button onClick={handler} type="button">9</button>
          <button onClick={handler} className="bg-orange button-x" type="button">x</button>
          <button onClick={handler} type="button">4</button>
          <button onClick={handler} type="button">5</button>
          <button onClick={handler} type="button">6</button>
          <button onClick={handler} className="bg-orange" type="button">-</button>
          <button onClick={handler} type="button">1</button>
          <button onClick={handler} type="button">2</button>
          <button onClick={handler} type="button">3</button>
          <button onClick={handler} className="bg-orange" type="button">+</button>
          <button onClick={handler} className="button-0" type="button">0</button>
          <button onClick={handler} type="button">.</button>
          <button onClick={handler} className="bg-orange" type="button">=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
