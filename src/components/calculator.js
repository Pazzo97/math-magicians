import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const initialItems = {
    total: 0,
    next: null,
    operation: null,
  };

  const [text, setText] = useState(initialItems);

  const calcBtn = (x) => {
    setText(() => calculate(text, x));
  };

  const { total, next, operation } = text;
  return (
    <main>
      <div>
        <h2 className="calulator-content">Let&apos;s do some math!</h2>
      </div>
      <div className="calculator">
        <div className="calc-monitor">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <button
          className="calc-ac-button btn-main-color"
          type="button"
          onClick={() => calcBtn('AC')}
        >
          AC
        </button>
        <button
          className="calc-plusminus-button btn-main-color"
          type="button"
          onClick={() => calcBtn('+/-')}
        >
          +/-
        </button>
        <button
          className="calc-percentage-button btn-main-color"
          type="button"
          onClick={() => calcBtn('%')}
        >
          %
        </button>
        <button
          className="calc-divide-button btn-second-color"
          type="button"
          onClick={() => calcBtn('÷')}
        >
          ÷
        </button>
        <button
          className="calc-7-button btn-main-color"
          type="button"
          onClick={() => calcBtn('7')}
        >
          7
        </button>
        <button
          className="calc-8-button btn-main-color"
          type="button"
          onClick={() => calcBtn('8')}
        >
          8
        </button>
        <button
          className="calc-9-button btn-main-color"
          type="button"
          onClick={() => calcBtn('9')}
        >
          9
        </button>
        <button
          className="calc-multiply-button btn-second-color"
          type="button"
          onClick={() => calcBtn('x')}
        >
          x
        </button>
        <button
          className="calc-4-button btn-main-color"
          type="button"
          onClick={() => calcBtn('4')}
        >
          4
        </button>
        <button
          className="calc-5-button btn-main-color"
          type="button"
          onClick={() => calcBtn('5')}
        >
          5
        </button>
        <button
          className="calc-6-button btn-main-color"
          type="button"
          onClick={() => calcBtn('6')}
        >
          6
        </button>
        <button
          className="calc-subtract-button btn-second-color"
          type="button"
          onClick={() => calcBtn('-')}
        >
          -
        </button>
        <button
          className="calc-1-button btn-main-color"
          type="button"
          onClick={() => calcBtn('1')}
        >
          1
        </button>
        <button
          className="calc-2-button btn-main-color"
          type="button"
          onClick={() => calcBtn('2')}
        >
          2
        </button>
        <button
          className="calc-3-button btn-main-color"
          type="button"
          onClick={() => calcBtn('3')}
        >
          3
        </button>
        <button
          className="calc-add-button btn-second-color"
          type="button"
          onClick={() => calcBtn('+')}
        >
          +
        </button>
        <button
          className="calc-0-button btn-main-color"
          type="button"
          onClick={() => calcBtn('0')}
        >
          0
        </button>
        <button
          className="calc-dot-button btn-main-color"
          type="button"
          onClick={() => calcBtn('.')}
        >
          .
        </button>
        <button
          className="calc-equal-button btn-second-color"
          type="button"
          onClick={() => calcBtn('=')}
        >
          =
        </button>
      </div>
    </main>
  );
};

export default Calculator;
