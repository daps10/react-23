import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // settimeout for onTimeout and timer
    const timerTimeOut = setTimeout(
      onTimeout, 
      timeout
    );
    
    clearTimeout(timerTimeOut);
  }, [timeout, onTimeout]);

  // useEffect for remaining time
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(timerInterval);
    };
  }, []); 

  return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
  );
};