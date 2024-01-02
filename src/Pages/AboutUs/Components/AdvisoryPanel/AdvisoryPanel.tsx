import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import gopichand from "../../../assets/advisory/gopichand.png";
import mohan from "../../../assets/advisory/mohan.png";
import sathish from "../../../assets/advisory/sathish.png";
import styles from './AdvisoryPanel.module.css'

type Props = {};

export const AdvisoryPanel = (_props: Props) => {
  return (
    <div className={styles.AdvisoryPanel}>
      <SectionHeading title="Advisory Panel" />
      <div>
        <ImageHoverBox
          image={gopichand}
          name={"Dr. Gopichand Katragadda"}
          width={"300px"}
          height={"320px"}
          description="FOUNDER & CEO OF MYELIN FOUNDRY, PAST CTO OF TATA GROUP"
        />
        <ImageHoverBox
          image={mohan}
          name={"Mohan Sundaram"}
          width={"300px"}
          height={"320px"}
          description="CEO of ARTILAB foundation"
        />
        <ImageHoverBox
          image={sathish}
          name={"Sathish Babu"}
          width={"300px"}
          height={"320px"}
          description="KERALA-BASED FREE SOFTWARE CHAMPION, INTERNET PIONEER, AND DEVELOPMENT EXPERT"
        />
      </div>
    </div>
  );
};
