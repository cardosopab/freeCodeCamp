function Button(props) {
  return (
    <div id={props.id} key={props.id} className='button' onClick={() => props.handleInput(props.value)} >{props.value} </div>
  )
}
export default Button