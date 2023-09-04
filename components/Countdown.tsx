"use client";
import { useState, useEffect } from "react";

function CountdownTimer() {
  const initialTime = 60 * 60; // 60 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Helper function to format time as "00:00:00"
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="fixed top-[20%] right-8">
      <div className="text-[25px] text-blue-500">
        {formatTime(timeRemaining)}
      </div>
    </div>
  );
}

export default CountdownTimer;
