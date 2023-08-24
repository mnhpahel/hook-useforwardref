import React, { useEffect, useRef, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  const cleanUpRef = useRef(null)
 
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    cleanUpRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(cleanUpRef.current);
    };
  });

  return (
    <div>
      <span>Time: {date.toLocaleTimeString()}</span>
      <span>
        <button type="button" onClick={() => clearInterval(cleanUpRef.current) }>CleanUp</button>
      </span>
    </div>
  );
};

export default Time;
