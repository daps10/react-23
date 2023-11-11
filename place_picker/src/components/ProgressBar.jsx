import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  // intervally called this function to set remainingTime
  useEffect(() => {
    const intervalID = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);
    
    return (() => {
      clearInterval(intervalID);
    });
  }, []);

  return <progress value={remainingTime} max={timer}/>
}