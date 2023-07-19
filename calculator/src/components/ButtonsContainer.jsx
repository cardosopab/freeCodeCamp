import { buttonData } from '../models/calculatorData'
import Button from "./Button"
function ButtonsContainer(props) {
    return (
        <div className="button-container">
            {buttonData.map((button) => {
                return (
                    <Button key={button.id} id={button.id} value={button.value} handleInput={props.handleInput} />
                )
            })}
        </div>
    )
}
export default ButtonsContainer