import { CounterComponent } from "./CounterComponent";
import { Earthsvg, Personsvg, Timersvg } from "./svg";
import styles from "./CounterContainer.module.css";

type Props = {};

export const CounterContainer = (_props: Props) => {
  return (
    <div className={styles.CounterContainer}>
      <CounterComponent
        Svg={Earthsvg}
        limit={3000}
        text1="Students"
        text2="Reached"
        speed={0}
        start={1500}
      />{" "}
      <CounterComponent
        Svg={Personsvg}
        limit={600}
        text1="Students"
        text2="Enrolled"
        speed={10}
        start={50}
      />{" "}
      <CounterComponent
        Svg={Timersvg}
        limit={200}
        text1="Hours of"
        text2="content"
        speed={40}
        start={0}
      />
    </div>
  );
};
