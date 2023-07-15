import { useSelector } from 'react-redux'
function Display() {
  const display = useSelector(state => state.display.value)
  return (
    <div id="display">{display}</div>
  )
}
export default Display