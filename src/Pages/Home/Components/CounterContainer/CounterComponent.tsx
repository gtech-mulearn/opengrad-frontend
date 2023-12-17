import React, { useEffect, useState } from "react";
import styles from "./CounterContainer.module.css";

type Props = {
  Svg: React.ElementType; // This type expects a React component.
  limit: number;
  text1: string;
  text2: string;
  speed: number;
};

export const CounterComponent = ({ Svg, limit, text1, text2,speed }: Props) => {
  const [count, setCount] = useState(0);

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
    }, speed); // Counts every 100 milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [limit]);

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
