import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  calcBtn = (x) => {
    this.setState((s) => calculate(s, x));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <main>
        <div className="calculator">
          <div className="calc-monitor">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
          <button className="calc-ac-button btn-main-color" type="button" onClick={() => this.calcBtn('AC')}>AC</button>
          <button className="calc-plusminus-button btn-main-color" type="button" onClick={() => this.calcBtn('+/-')}>+/-</button>
          <button className="calc-percentage-button btn-main-color" type="button" onClick={() => this.calcBtn('%')}>%</button>
          <button className="calc-divide-button btn-second-color" type="button" onClick={() => this.calcBtn('÷')}>÷</button>
          <button className="calc-7-button btn-main-color" type="button" onClick={() => this.calcBtn('7')}>7</button>
          <button className="calc-8-button btn-main-color" type="button" onClick={() => this.calcBtn('8')}>8</button>
          <button className="calc-9-button btn-main-color" type="button" onClick={() => this.calcBtn('9')}>9</button>
          <button className="calc-multiply-button btn-second-color" type="button" onClick={() => this.calcBtn('x')}>x</button>
          <button className="calc-4-button btn-main-color" type="button" onClick={() => this.calcBtn('4')}>4</button>
          <button className="calc-5-button btn-main-color" type="button" onClick={() => this.calcBtn('5')}>5</button>
          <button className="calc-6-button btn-main-color" type="button" onClick={() => this.calcBtn('6')}>6</button>
          <button className="calc-substract-button btn-second-color" type="button" onClick={() => this.calcBtn('-')}>-</button>
          <button className="calc-1-button btn-main-color" type="button" onClick={() => this.calcBtn('1')}>1</button>
          <button className="calc-2-button btn-main-color" type="button" onClick={() => this.calcBtn('2')}>2</button>
          <button className="calc-3-button btn-main-color" type="button" onClick={() => this.calcBtn('3')}>3</button>
          <button className="calc-add-button btn-second-color" type="button" onClick={() => this.calcBtn('+')}>+</button>
          <button className="calc-0-button btn-main-color" type="button" onClick={() => this.calcBtn('0')}>0</button>
          <button className="calc-dot-button btn-main-color" type="button" onClick={() => this.calcBtn('.')}>.</button>
          <button className="calc-equal-button btn-second-color" type="button" onClick={() => this.calcBtn('=')}>=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
