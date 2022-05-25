import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.PureComponent {
  render() {
    return (
      <CalcComponent
        monitor="0"
        ac="AC"
        plusminus="+/-"
        percentage="%"
        divide="÷"
        button7="7"
        button8="8"
        button9="9"
        multiply="×"
        button4="4"
        button5="5"
        button6="6"
        substract="-"
        button1="1"
        button2="2"
        button3="3"
        add="+"
        button0="0"
        dot="."
        equal="="
      />
    );
  }
}

const CalcComponent = (props) => {
  const {
    monitor,
    ac,
    plusminus,
    percentage,
    divide,
    button7,
    button8,
    button9,
    multiply,
    button4,
    button5,
    button6,
    substract,
    button1,
    button2,
    button3,
    add,
    button0,
    dot,
    equal,
  } = props;
  return (
    <main>
      <div className="calculator">
        <div className="calc-monitor">{monitor}</div>
        <button className="calc-ac-button btn-main-color" type="button">{ac}</button>
        <button className="calc-plusminus-button btn-main-color" type="button">{plusminus}</button>
        <button className="calc-percentage-button btn-main-color" type="button">{percentage}</button>
        <button className="calc-divide-button btn-second-color" type="button">{divide}</button>
        <button className="calc-7-button btn-main-color" type="button">{button7}</button>
        <button className="calc-8-button btn-main-color" type="button">{button8}</button>
        <button className="calc-9-button btn-main-color" type="button">{button9}</button>
        <button className="calc-multiply-button btn-second-color" type="button">{multiply}</button>
        <button className="calc-4-button btn-main-color" type="button">{button4}</button>
        <button className="calc-5-button btn-main-color" type="button">{button5}</button>
        <button className="calc-6-button btn-main-color" type="button">{button6}</button>
        <button className="calc-subtsract-button btn-second-color" type="button">{substract}</button>
        <button className="calc-1-button btn-main-color" type="button">{button1}</button>
        <button className="calc-2-button btn-main-color" type="button">{button2}</button>
        <button className="calc-3-button btn-main-color" type="button">{button3}</button>
        <button className="calc-add-button btn-second-color" type="button">{add}</button>
        <button className="calc-0-button btn-main-color" type="button">{button0}</button>
        <button className="calc-dot-button btn-main-color" type="button">{dot}</button>
        <button className="calc-equal-button btn-second-color" type="button">{equal}</button>
      </div>
    </main>
  );
};

CalcComponent.propTypes = {
  monitor: PropTypes.string.isRequired,
  ac: PropTypes.string.isRequired,
  plusminus: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  divide: PropTypes.string.isRequired,
  button7: PropTypes.string.isRequired,
  button8: PropTypes.string.isRequired,
  button9: PropTypes.string.isRequired,
  multiply: PropTypes.string.isRequired,
  button4: PropTypes.string.isRequired,
  button5: PropTypes.string.isRequired,
  button6: PropTypes.string.isRequired,
  substract: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  button3: PropTypes.string.isRequired,
  add: PropTypes.string.isRequired,
  button0: PropTypes.string.isRequired,
  dot: PropTypes.string.isRequired,
  equal: PropTypes.string.isRequired,
};

export default Calculator;
