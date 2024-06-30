import React, { useEffect } from "react";
import { useState } from "react";
import "./StopCounter.css";
const StopCounter = () => {
  const [counter, setCounter] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const [IntervalId, setIntervalId] = useState(null);
  useEffect(() => {
    if (isRuning) {
      const id = setInterval(() => {
        setCounter((prevCount) => prevCount + 1);
      }, 400);
      setIntervalId(id);
    } else if (!isRuning && IntervalId) {
      clearInterval(IntervalId);
      setIntervalId(null);
    }
    return () => clearInterval(IntervalId);
  }, [isRuning]);
  const StartStopCounter = () => {
    setIsRuning(!isRuning);
  };
  const resetCounter = () => {
    setIsRuning(false);
    setCounter(0);
    if (IntervalId) {
      clearInterval(IntervalId);
      setIntervalId(null);
    }
  };
  return (
    <div className="counter">
      <h1>Counter:{counter}</h1>
      <button onClick={StartStopCounter}>{isRuning ? "Stop" : "Start"}</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default StopCounter;

// function getTotal(a,b){
//   return a+b;
// }
// arrow Function
// const  findAge= (a,b)=>{
//   return a+b;
// }
// console.log(getTotal(4,5))
