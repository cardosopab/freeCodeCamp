import { useState, useEffect, useRef } from "react";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLength, setTimerLength] = useState(`25:00`);
  const [playPause, setPlay] = useState(false);
  const [previousTimer, setPreviousTimer] = useState(null);
  const [timerLabel, setTimerLabel] = useState('Session');
  const intervalRef = useRef(null);
  const isSessionRef = useRef(true);
  const audioRef = useRef(null);

  function decrementBreak() {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  }
  function incrementBreak() {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }
  function decrementSession() {
    if (sessionLength > 1) {
      const decremented = sessionLength - 1
      setSessionLength(decremented);
      setTimerLength(`${decremented.toString().padStart(2, '0')}:00`)
    }
  }
  function incrementSession() {
    if (sessionLength < 60) {
      const incremented = sessionLength + 1
      setSessionLength(incremented);
      setTimerLength(`${incremented.toString().padStart(2, '0')}:00`)
    }
  }
  function togglePlay() {
    setPlay(!playPause)
  }
  function handleReset() {
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setPlay(false)
    clearInterval(intervalRef.current)
    setPreviousTimer(null)
    isSessionRef.current = true;
    setBreakLength(5)
    setSessionLength(25)
    setTimerLength('25:00')
    setTimerLabel('Session')
  }

  useEffect(() => {
    let seconds = sessionLength * 60;
    if (previousTimer !== null) {
      seconds = previousTimer;
    }
    seconds--;
    if (playPause) {
      console.log('timer started')
      let minutes;
      let remainingSeconds;
      intervalRef.current = setInterval(() => {
        minutes = Math.floor(seconds / 60);
        remainingSeconds = seconds % 60;
        setTimerLength(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
        setPreviousTimer(seconds)
        console.log('sessionLength', sessionLength)
        console.log('breakLength', breakLength)
        seconds--;
        if (seconds < 0) {
          audioRef.current.play()
          isSessionRef.current = !isSessionRef.current
          console.log(isSessionRef.current)
          seconds = isSessionRef.current ? sessionLength * 60 : breakLength * 60;
          setTimerLength(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
          setTimerLabel(isSessionRef.current ? 'Session' : 'Break')
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [playPause]);

  return (
    <div id='pomodoro'>
      <div id="upper-row">
        <div id="left-col">
          <div id="break-label">Break Length</div>
          <div className="selectors">
            <button id="break-decrement" onClick={() => decrementBreak()} ><i class="fa-solid fa-caret-down"></i></button>
            <div id="break-length">{breakLength}</div>
            <button id="break-increment" onClick={() => incrementBreak()}><i class="fa-solid fa-caret-up"></i></button>
          </div>
        </div>
        <div id="right-col">
          <div id="session-label">Session Length</div>
          <div className="selectors">
            <button id="session-decrement" onClick={() => decrementSession()}><i class="fa-solid fa-caret-down"></i></button>
            <div id="session-length">{sessionLength}</div>
            <button id="session-increment" onClick={() => incrementSession()}><i class="fa-solid fa-caret-up"></i></button>
          </div>
        </div>
      </div>
      <div id="lower-row">

        <div id="timer-label">{timerLabel}</div>
        <div id="time-left">{timerLength}</div>
        <button id="start_stop" onClick={() => togglePlay()}>Play/Pause</button>
        <button id="reset" onClick={() => handleReset()}>Reset</button>
      </div>
      <audio ref={audioRef}
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
