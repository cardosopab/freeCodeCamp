import Display from './Display'
import Clear from '../components/buttons/Clear'
import Divide from '../components/buttons/Divide'
import Multiply from '../components/buttons/Multiply'
import Decimal from '../components/buttons/Decimal'
import Number from '../components/buttons/Number'
import Subtract from '../components/buttons/Subtract'
import Add from '../components/buttons/Add'
import Equals from '../components/buttons/Equals'
import buttonArr from '../models/buttonArr'
function Calculator() {
  return (
    <>
      <div id="calculator">
        <Display />
        <div id="button-container">
          <div className="row-one">
            <Clear />
            <Divide />
            <Multiply />
          </div>
          <div className="row-two">
            <div className="number-container">
              {buttonArr.map((num) => {
                return (
                  // <div id={num[0]}>{num[1]}</div>
                  <Number id={num[0]} num={num[1]} />
                )
              })}
              <Decimal />
            </div>
            <div className="row-two-col">
              <Subtract />
              <Add />
              <Equals />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Calculator