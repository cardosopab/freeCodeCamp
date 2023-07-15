import React, { useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { update } from '../redux/displaySlice'
function DrumPad(props) {
    const audioRef = useRef(null);
    const dispatch = useDispatch();

    const handlePlay = () => {
        audioRef.current.play();
        dispatch(update(props.name));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toUpperCase();
            if (props.keyboardArr.includes(key)) {
                audioRef.current = document.getElementById(key);
                audioRef.current.play();
                dispatch(update(audioRef.current.parentElement.id));
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [props.keyboardArr, audioRef, dispatch]);
    return (<>
        <button id={props.name} className="drum-pad" onClick={handlePlay} >{props.title}
            <audio ref={audioRef} id={props.title} src={props.file} className="clip" type="audio/mp3" preload="auto">
            </audio>
        </button>
    </>
    )
}
export default DrumPad