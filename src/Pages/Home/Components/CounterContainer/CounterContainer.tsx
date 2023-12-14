import { CounterComponent } from "./CounterComponent";
import { Earthsvg,Personsvg,Timersvg } from "./svg";
import styles from './CounterContainer.module.css'

type Props = {};

export const CounterContainer = (_props: Props) => {
  return (
    <div className={styles.CounterContainer}>
      <CounterComponent
        Svg={Earthsvg}
        limit={3000}
        text1="Students"
        text2="Reached"
      />{" "}
      <CounterComponent
        Svg={Personsvg}
        limit={600}
        text1="Students"
        text2="Enrolled"
        
      />{" "}
      <CounterComponent
        Svg={Timersvg}
        limit={200}
        text1="Hours of"
        text2="content"
      />
    </div>
  );
};
