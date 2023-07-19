import { useSelector, useDispatch } from 'react-redux';
import { setOutput, setInput, setSubmitted } from '../redux/calculatorSlice'
import Display from './Display'
import ButtonsContainer from './ButtonsContainer';

function Calculator() {
  const input = useSelector(state => state.calculator.input)
  const output = useSelector(state => state.calculator.output)
  const isSubmitted = useSelector(state => state.calculator.isSubmitted)
  const dispatch = useDispatch();

  const isOperator = (symbol) => {
    return /[*/+-]/.test(symbol);
  };

  const handleEquals = () => {
    const total = eval(output);
    dispatch(setOutput(`${total}`));
    dispatch(setInput(`${total}`));
  };

  const handleClear = () => {
    dispatch(setOutput(""));
    dispatch(setInput("0"));
  };


  const handleNumbers = (value) => {
    if (!output.length) {
      dispatch(setOutput(`${value}`));
      dispatch(setInput(`${value}`));
    } else {
      if (value === 0 && (output === "0" || input === "0")) {
        dispatch(setOutput(`${output}`));
      } else {
        if (isSubmitted) {
          dispatch(setSubmitted(false))
          dispatch(setInput(`${value}`));
          dispatch(setOutput(`${value}`));
        } else if (isSubmitted && isOperator(value)) {
          dispatch(setSubmitted(false))
          dispatch(setInput(`${input}${value}`));
          dispatch(setOutput(`${output}${value}`));
        } else if (!isSubmitted) {
          const lastChar = output.charAt(output.length - 1);
          const isLastCharOperator =
            isOperator(lastChar);

          dispatch(setInput(isLastCharOperator ? `${value}` : `${input}${value}`));
          dispatch(setOutput(`${output}${value}`));
        }
      }
    }
  };

  const handleDecimal = () => {
    const lastChar = output.charAt(output.length - 1);
    if (!output.length) {
      dispatch(setInput("0."));
      dispatch(setOutput("0."));
    } else {
      if (isOperator(lastChar)) {
        dispatch(setInput("0."));
        dispatch(setOutput(`${output} 0.`));
      } else {
        const isDecimalIncluded = input.includes(".")
        dispatch(setInput(
          isDecimalIncluded ? `${input}` : `${input}.`
        ));
        ;
        dispatch(setOutput(isDecimalIncluded
          ? `${output}`
          : `${output}.`));
      }
    }
  };


  const handleOperators = (value) => {
    if (isSubmitted) {
      dispatch(setSubmitted(false))
    }
    if (output.length) {
      dispatch(setInput(`${value}`));
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
          dispatch(setOutput(updatedMemory));
        } else {
          dispatch(setOutput(`${output.substring(0, output.length - 1)}${value}`));
        }
      } else {
        dispatch(setOutput(`${output}${value}`));
      }
    }
  };

  const handleInput = (value) => {
    const number = typeof value === 'number' ? value : undefined;
    const operator = isOperator(value) ? value : undefined;

    switch (value) {
      case "=":
        handleEquals();
        dispatch(setSubmitted(true));
        break;
      case "AC":
        dispatch(setSubmitted(false));
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
        <Display />
        <ButtonsContainer handleInput={handleInput} />
      </div>
    </>
  )
}
export default Calculator


