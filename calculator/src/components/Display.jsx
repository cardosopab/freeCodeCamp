import { useSelector } from 'react-redux'

function Display() {
  const output = useSelector(state => state.calculator.output)
  const input = useSelector(state => state.calculator.input)

  return (
    <div className="display">
      <p >{output}</p>
      <p id='display'>{input}</p>
    </div>
  )
}
export default Display