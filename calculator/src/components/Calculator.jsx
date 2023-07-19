import { buttonData, numbers, operators } from '../models/calculatorData'
import { useState } from 'react';
function Calculator() {

  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const isOperator = (symbol) => {
    return /[*/+-]/.test(symbol);
  };

  const handleEquals = () => {
    const total = eval(output);
    setOutput(`${total}`);
    setInput(`${total}`);
  };

  const handleClear = () => {
    setOutput("");
    setInput("0");
  };


  const handleNumbers = (value) => {
    if (!output.length) {
      setOutput(`${value}`);
      setInput(`${value}`);
    } else {
      if (value === 0 && (output === "0" || input === "0")) {
        setOutput(`${output}`);
      } else {
        if (isSubmitted) {
          setSubmitted(false)
          setInput(`${value}`);
          setOutput(`${value}`);
        } else if (isSubmitted && isOperator(value)) {
          setSubmitted(false)
          setInput(`${input}${value}`);
          setOutput(`${output}${value}`);
        } else if (!isSubmitted) {
          const lastChar = output.charAt(output.length - 1);
          const isLastCharOperator =
            isOperator(lastChar);

          setInput(isLastCharOperator ? `${value}` : `${input}${value}`);
          setOutput(`${output}${value}`);
        }
      }
    }
  };

  const handleDecimal = () => {
    const lastChar = output.charAt(output.length - 1);
    if (!output.length) {
      setInput("0.");
      setOutput("0.");
    } else {
      if (isOperator(lastChar)) {
        setInput("0.");
        setOutput(`${output} 0.`);
      } else {
        const isDecimalIncluded = input.includes(".")
        setInput(
          isDecimalIncluded ? `${input}` : `${input}.`
        );
        ;
        setOutput(isDecimalIncluded
          ? `${output}`
          : `${output}.`);
      }
    }
  };


  const handleOperators = (value) => {
    if (isSubmitted) {
      setSubmitted(false)
    }
    if (output.length) {
      setInput(`${value}`);
      const lastChar = output.charAt(output.length - 1);
      const secondToLastChar = output.charAt(output.length - 2);
      const isLastCharOperator = isOperator(lastChar);
      const isSecondToLastCharOperator = isOperator(secondToLastChar);
      if (
        (isLastCharOperator && value !== "-") ||
        isSecondToLastCharOperator && isLastCharOperator
      ) {
        if (isSecondToLastCharOperator) {
          const updatedMemory = `${output.substring(
            0,
            output.length - 2
          )}${value}`;
          setOutput(updatedMemory);
        } else {
          setOutput(`${output.substring(0, output.length - 1)}${value}`);
        }
      } else {
        setOutput(`${output}${value}`);
      }
    }
  };

  const handleInput = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case "=":
        handleEquals();
        setSubmitted(true);
        break;
      case "AC":
        setSubmitted(false);
        handleClear();
        break;
      case number:
        handleNumbers(value);
        break;
      case ".":
        handleDecimal(value);
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };


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


