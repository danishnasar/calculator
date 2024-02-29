import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Operations from './operations.js';

export default function Digits () {
    const [number, setNumber] = useState('');

    const startOperation = (operand) => {
        if (number !== '') {
            if (operand.target.outerText !== '=') {
                checkExp(operand.target.outerText);
            } else {
                const result = eval(number);
                setNumber(result);
            }
        }
    }

    const clearLastItem = () => {
        if (number !== '') {
            let currentNumber = String(number);
            let wholeItems = currentNumber.split('');
            wholeItems.pop();
            let finalResult = wholeItems.join('');
            setNumber(finalResult);
        }
    }

    const checkExp = (operator) => {
        if (number !== '') {
            let fullExp = eval(new String(number));
            const lastItem = fullExp[fullExp.length -1];
            if (operator === '.') {
                if (lastItem !== operator) {
                    setNumber(number + operator);
                }
            } else {
                const functionOperators = ['+','-','/','*'];
                if (functionOperators.indexOf(lastItem) === -1) {
                    setNumber(number + operator);
                }
            }
        } else {
            setNumber(number + operator);
        }
    }

    return (
    <>
    <div className='positionDigits'>
      <input value={number} className='textBox' type="text" readOnly />
      <button onClick={() => clearLastItem()} type="button" class="btn btn-info">C</button>

      <div className='digitClass'>
      <button onClick={() => setNumber(number + '9')} type="button" class="btn btn-info">9</button>
      <button onClick={() => setNumber(number + '8')} type="button" class="btn btn-info">8</button>
      <button onClick={() => setNumber(number + '7')} type="button" class="btn btn-info">7</button>
      </div>
      <div className='digitClass'>
      <button onClick={() => setNumber(number + '6')} type="button" class="btn btn-info">6</button>
      <button onClick={() => setNumber(number + '5')} type="button" class="btn btn-info">5</button>
      <button onClick={() => setNumber(number + '4')} type="button" class="btn btn-info">4</button>
      </div>
      <div className='digitClass'>
      <button onClick={() => setNumber(number + '3')} type="button" class="btn btn-info">3</button>
      <button onClick={() => setNumber(number + '2')} type="button" class="btn btn-info">2</button>
      <button onClick={() => setNumber(number + '1')} type="button" class="btn btn-info">1</button>
      </div>
      <div className='digitClass'>
      <button onClick={() => setNumber('')} type="button" class="btn btn-info">AC</button>
      <button onClick={() => checkExp('.')} type="button" class="btn btn-info">.</button>
      <button onClick={() => setNumber(number + '0')} type="button" class="btn btn-info">0</button>
      </div>
    </div>
    <Operations operation={() => startOperation}/>
    </>
    )
}