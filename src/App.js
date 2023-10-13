import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (event) => {
    const number = event.target.textContent;
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  const handleOperator = (event) => {
    const operator = event.target.textContent;

    setDisplay(display + ' ' + operator + ' ');
  }

  const handleEqual = () => {
    setDisplay(eval(display))
  }

  const handleDecimal = () => {
    const array = display.split(' ');
    const lastElement = array[array.length - 1];

    if (!lastElement.includes('.')) {
      setDisplay(display + '.');
    }
  }

  const handleClear = () => {
    setDisplay('0');
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">
          {display}
        </div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div className='button' id="seven" onClick={handleNumber}>7</div>
        <div className='button' id="eight" onClick={handleNumber}>8</div>
        <div className='button' id="nine" onClick={handleNumber}>9</div>
        <div className='button' id="multiply" onClick={handleOperator}>*</div>
        <div className='button' id="four" onClick={handleNumber}>4</div>
        <div className='button' id="five" onClick={handleNumber}>5</div>
        <div className='button' id="six" onClick={handleNumber}>6</div>
        <div className='button' id="divide" onClick={handleOperator}>/</div>
        <div className='button' id="one" onClick={handleNumber}>1</div>
        <div className='button' id="two" onClick={handleNumber}>2</div>
        <div className='button' id="three" onClick={handleNumber}>3</div>
        <div className='button' id="add" onClick={handleOperator}>+</div>
        <div className='button' id="zero" onClick={handleNumber}>0</div>
        <div className='button' id="decimal" onClick={handleDecimal}>.</div>
        <div className='button' id="equals" onClick={handleEqual}>=</div>
        <div className='button' id="subtract" onClick={handleOperator}>-</div>
      </div>
    </div>
  );
}

export default App;
