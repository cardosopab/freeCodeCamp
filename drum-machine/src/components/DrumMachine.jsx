import Display from "./Display"
import DrumPad from "./DrumPad";
import fetchMP3Paths from "../models/fetchMP3Paths";
import getPropByIndex from "../models/getPropByIndex";
import { keyboardArr } from "../models/drumMachineModel";
import sortByOrderMap from "../models/sortByOrderMap";


const mp3Paths = fetchMP3Paths();
sortByOrderMap(mp3Paths);

export default function DrumMachine() {
    return (
        <div id="drum-machine">
            <div className="pad-container">
                {mp3Paths.map((file, index) => {
                    const key = getPropByIndex(index);
                    return (
                        <DrumPad file={file} key={key} title={keyboardArr[index]} name={key} keyboardArr={keyboardArr} />
                    )
                })}
            </div>
            <div className="second-col">

                <div id="label">CardosoPab</div>
                <Display />
            </div>
        </div>
    )
}