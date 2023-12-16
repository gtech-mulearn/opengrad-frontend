import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./ProblemScenario.module.css";
import LOA from "./assets/LOA.png";
import LOM from "./assets/LOM.png";
import accessability from "./assets/accessability.png";
import finance from "./assets/finance.png";
import graph from "./assets/graphmode.png";
type Props = {
  image: string;
  pra: string;
};

export const ProblemScenario = (_props: Props) => {
  return (
    <div className={styles.ProblemScenarioWrapper}>
      <div className={styles.heading}>
        {" "}
        <SectionHeading title="The Problem Scenario" />
        <p>
          Increased commercialization of entrance education, has<br></br> led to
          disproportionate participation.
        </p>
      </div>
      <div className={styles.DetailSection}>
        <div className={styles.GridSetWrapper}>
          <GridSet image={LOA} pra={"Lack of awareness"} />
          <GridSet image={LOM} pra={"Lack of Mentors"} />
          <GridSet image={accessability} pra={"Accessibility"} />
          <GridSet image={finance} pra={"Finance"} />
        </div>
        <div className={styles.CircularAnimationWrapper}>
          <img src={graph} alt="" />
        </div>
      </div>
    </div>
  );
};

const GridSet = ({ image, pra }: Props) => {
  return (
    <div className={styles.GrifSet}>
      <img src={image} alt="" />
      <p>{pra}</p>
    </div>
  );
};
