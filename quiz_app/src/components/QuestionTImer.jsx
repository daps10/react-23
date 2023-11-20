import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    // settimeout for onTimeout and timer
    setTimeout(onTimeout, timeout)
  }, [timeout, onTimeout]);

  // useEffect for remaining time
  useEffect(() => {
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

  }, []); 

  return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
  );
};