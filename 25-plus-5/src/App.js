import { useState, useEffect } from "react";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLength, setTimerLength] = useState(25);
  const [play, setPlay] = useState(false);
  const [previousTimer, setPreviousTimer] = useState(null);

  function decrementBreak() {
    setBreakLength(breakLength - 1);
  }
  function incrementBreak() {
    setBreakLength(breakLength + 1);
  }
  function decrementSession() {
    const decremented = sessionLength - 1
    setSessionLength(decremented);
    setTimerLength(decremented)
  }
  function incrementSession() {
    const incremented = sessionLength + 1
    setSessionLength(incremented);
    setTimerLength(incremented)
  }
  function togglePlay() {
    setPlay(!play)
  }
  function resetTimer() {
    setPlay(false)
    setTimerLength(sessionLength)
    setPreviousTimer(null)
  }

  useEffect(() => {
    let seconds = sessionLength * 60;
    let interval;


    if (previousTimer !== null) {
      seconds = previousTimer;
    }

    if (play) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      setTimerLength(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
      interval = setInterval(() => {
        minutes = Math.floor(seconds / 60);
        remainingSeconds = seconds % 60;
        setTimerLength(`${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
        seconds--;
        setPreviousTimer(seconds)
        if (seconds < 0) {
          setPreviousTimer(null)
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [play]);

  return (
    <div id='pomodoro'>
      <div id="break-label">Break Length</div>
      <button id="break-decrement" onClick={() => decrementBreak()}>decrement</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={() => incrementBreak()}>increment</button>
      <div id="session-label">Session Length</div>
      <button id="session-decrement" onClick={() => decrementSession()}>decrement</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={() => incrementSession()}>increment</button>
      <div id="timer-label">Session/Break</div>
      <div id="time-left">{play ? timerLength : previousTimer == null ? timerLength + ':00' : timerLength}</div>
      <button id="start_stop" onClick={() => togglePlay()}>Play/Pause</button>
      <button id="reset" onClick={() => resetTimer()}>Reset</button>
    </div>
  );
}

export default App;
