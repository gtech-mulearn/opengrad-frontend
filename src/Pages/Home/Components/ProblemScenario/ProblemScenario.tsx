import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from './ProblemScenario.module.css'
type Props = {};

export const ProblemScenario = (_props: Props) => {
  return (
    <div className={styles.ProblemScenarioWrapper}>
      <div>
        {" "}
        <SectionHeading title="The Problem Scenario" />
        <p>
          Increased commercialization of entrance education, has led to
          disproportionate participation.
        </p>
      </div>
      <div>
        <div>
          <div><GridSet /></div>
          <div>svg,txt</div> <div>svg,txt</div> <div>svg,txt</div>
        </div>
        <div>
          <div>outer circle</div>
          <div>inner circle</div>
          <div>line 1</div>
          <div>line 2</div>
        </div>
      </div>
    </div>
  );
};


const GridSet =()=>{
  return(
    <div>

    </div>
  )
}