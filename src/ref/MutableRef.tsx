import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intValRef.current) {
      window.clearInterval(intValRef.current);
    }
  };

  useEffect(() => {
    intValRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h2>Timer: {timer}</h2>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default MutableRef;
