// import Display from './Display'
import { buttonData, operators, numbers } from '../models/calculatorData'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOutput, setInput, setCaculatorData } from '../redux/calculatorSlice'
function Calculator() {
  
  const dispatch = useDispatch();
  const input = useSelector(state => state.calculator.input)
  const output = useSelector(state => state.calculator.output)
  const calculatorData = useSelector(state => state.calculator.calculatorData)


  function handleEquals() {
    const answer = eval(calculatorData);
    dispatch(setInput(answer));
    dispatch(setOutput(`${answer}=${answer}`));
    dispatch(setCaculatorData(`${answer}`))
  }
  function handleClear() {
    dispatch(setInput('0'))
    dispatch(setCaculatorData(''))
  }
  function handleNumbers(value) {
    if (!calculatorData.length) {
      dispatch(setInput(`${value}`));
      dispatch(setCaculatorData(`${value}`));
    } else {
      if (value === 0 && (calculatorData === '0' || input === '0')) {
        dispatch(setCaculatorData(`${calculatorData}`));
      } else {
        const lastChar = calculatorData.charAt(calculatorData.length - 1);
        const isLastCharOperator = lastChar === '*' || operators.includes(lastChar);
        dispatch(setInput(isLastCharOperator ? `${value}` : `${input}${value}`));
        dispatch(setCaculatorData(`${calculatorData}${value}`));
      }
    }
  }
  function handleDecimal() {
    const lastChar = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      dispatch(setInput('0.'));
      dispatch(setCaculatorData('0.'));
    } else {
      if (lastChar === '*' || operators.includes(lastChar)) {
        dispatch(setInput('0.'));
        dispatch(setCaculatorData(`${calculatorData}0.`));
      } else {
        const isDecimalInInput = lastChar === '.' || input.includes('.');
        dispatch(setInput(isDecimalInInput ? `${input}` : `${input}.`));
        dispatch(setCaculatorData(isDecimalInInput
          ? `${calculatorData}`
          : `${calculatorData}.`));
      }
    }
  }
  function handleOperators(value) {
    if (calculatorData.length) {
      dispatch(setInput(`${value}`));
      const beforeLastChar = calculatorData.charAt(calculatorData.length - 2);

      const isBeforeLastCharOperator =
        operators.includes(beforeLastChar) || beforeLastChar === "*";

      const lastChar = calculatorData.charAt(calculatorData.length - 1);

      const lastCharIsOperator = operators.includes(lastChar) || lastChar === "*";

      const validOperator = value === "x" ? "*" : value;
      if (
        (lastCharIsOperator && value !== "-") ||
        isBeforeLastCharOperator && lastCharIsOperator
      ) {
        if (isBeforeLastCharOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`;
          dispatch(setCaculatorData(updatedValue));
        } else {
          dispatch(setCaculatorData(`${calculatorData.substring(0, calculatorData.length - 1)}${validOperator}`));
        }
      } else {
        dispatch(setCaculatorData(`${calculatorData}${validOperator}`));
      }
    }
  }


  function handleInput(value) {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case '=':
        handleEquals();
        break;
      case 'AC':
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case '.':
        handleDecimal();
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  }

  function handleOutput() {
    dispatch(setOutput(calculatorData))
  }

  useEffect(() => {
    handleOutput()
  }, [calculatorData])

  return (
    <>
      <div id="calculator">
        <h1 id='label'>CardosoPab</h1>
        {/* <Display /> */}
        <div className="screen">
          <span >{output}</span>
          <span id="display" >{input}</span>
        </div>
        <div className="button-container">
          {buttonData.map((button) => {
            return (
              <div id={button.id} key={button.id} className='button' onClick={() => handleInput(button.value)}>{button.value}</div>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Calculator


