import React, { useEffect, useState } from "react";
import styles from "./CounterContainer.module.css";

type Props = {
  Svg: React.ElementType; // This type expects a React component.
  limit: number;
  text1: string;
  text2: string;
  speed: number;
  start?: number; // Optional starting number
};

export const CounterComponent = ({
  Svg,
  limit,
  text1,
  text2,
  speed,
  start = 0,
}: Props) => {
  const [count, setCount] = useState(start); // Initialize count with 'start'

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount < limit) {
          return currentCount + 1;
        } else {
          clearInterval(interval);
          return currentCount;
        }
      });
    }, speed); // Counts every 'speed' milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [limit, speed, start]); // Add 'start' to the dependency array

  return (
    <div className={styles.CounterComponent}>
      <Svg />
      <h1>{count}+</h1>
      <div>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};
