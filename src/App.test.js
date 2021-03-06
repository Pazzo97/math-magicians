import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './components/calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';
import calculate from './logic/calculate';
import operate from './logic/operate';

describe('Functions test', () => {
  test('calculate.js test', () => {
    const initialItems = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = '=';
    if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0,
        next: null,
        operation: null,
      });
    } else if (buttonName === '.') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0.0,
        next: null,
        operation: null,
      });
    } else if (buttonName === '1') {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: null,
        next: '1',
      });
    } else if (buttonName === '=') {
      expect(calculate(initialItems, buttonName)).toEqual({});
    }
  });

  test('operate.js addition test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '+';

    expect(operate(numberOne, numberTwo, operation)).toBe('3');
  });

  test('operate.js subtraction test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '-';

    expect(operate(numberOne, numberTwo, operation)).toBe('-1');
  });

  test('operate.js multiplication test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = 'x';

    expect(operate(numberOne, numberTwo, operation)).toBe('2');
  });

  test('operate.js division test', () => {
    const numberOne = '1';
    const numberTwo = '2';
    const operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toBe('0.5');
  });

  test('operate.js division by 0 test', () => {
    const numberOne = '1';
    const numberTwo = '0';
    const operation = '÷';

    expect(operate(numberOne, numberTwo, operation)).toBe("Can't divide by 0.");
  });

  test('operate.js remainder test', () => {
    const numberOne = '5';
    const numberTwo = '2';
    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toBe('1');
  });

  test('operate.js remainder when divide by 0 test', () => {
    const numberOne = '1';
    const numberTwo = '0';
    const operation = '%';

    expect(operate(numberOne, numberTwo, operation)).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});

describe('component test', () => {
  it('Calculator component must render correctly on initial run', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote component must render correctly on initial run', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home component must render correctly on initial run', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Header component must render correctly on initial run', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Simulation of user clicking button 9 twice', () => {
    render(<Calculator />);
    const buttonEl = screen.getByText(/9/i);

    userEvent.click(buttonEl);
    userEvent.click(buttonEl);

    expect(screen.getByText(/99/i)).toBeInTheDocument();
  });
});
