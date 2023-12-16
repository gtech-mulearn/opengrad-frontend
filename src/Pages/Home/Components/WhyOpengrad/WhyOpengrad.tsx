import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import {
  PeopleGrpsvg,
  LearnPlatformsvg,
  OutReachsvg,
  Empowersvg,
  GreenArrowsvg,
} from "./svg";
import styles from './WhyOpengrad.module.css'
type Props = {
  Svg: React.ElementType;
  pra1: string;
  pra2: string;
};

export const WhyOpengrad = () => {
  return (
    <div className={styles.WhyOpengradWrapper}>
      {" "}
      <SectionHeading title="Why choose OpenGrad?" />
      <div>
        <Containers
          Svg={PeopleGrpsvg}
          pra1="Mentors, teachers &"
          pra2="students prepare syllabus"
        />
        <GreenArrowsvg />
        <Containers
          Svg={LearnPlatformsvg}
          pra1="Free to access"
          pra2="learning platform"
        />
        <GreenArrowsvg />{" "}
        <Containers
          Svg={OutReachsvg}
          pra1="Outreach activities to"
          pra2="marginalized sections"
        />
        <GreenArrowsvg />
        <Containers
          Svg={Empowersvg}
          pra1="Empower students,"
          pra2="uplift society"
        />
      </div>
    </div>
  );
};

const Containers = ({ Svg, pra1, pra2 }: Props) => {
  return (
    <div className={styles.container}>
      <Svg />
      <div>
        <p>{pra1}</p>
        <p>{pra2}</p>
      </div>
    </div>
  );
};
