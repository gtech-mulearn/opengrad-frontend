import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox"
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import amith from "../../../assets/founders/amith.png";
import sahil from "../../../assets/founders/sahil.png";
import shahid from "../../../assets/founders/shahid.png";
import styles from './FoundersSection.module.css'

type Props = {}

export const FoundersSection = (_props: Props) => {
  return (
    <div className={styles.FoundersSection}>
      <SectionHeading title="The Founders" />
      <div>
        <ImageHoverBox
          image={sahil}
          name={"Sahil Sameer (CEO)"}
          width={"300px"}
          height={"320px"}
          description="Co-founder of Opengrad, IIM Indore alumnus, led Keralarescue.in, focuses on social change through communities, ex-manager at Samsung.
"
        />
        <ImageHoverBox
          image={amith}
          name={"Amith Tony Joseph (CTO)"}
          width={"300px"}
          height={"320px"}
          description="Expert in Product Management from ESMT Berlin, focuses on user-centric tech for Opengrad, enhancing digital platforms and AI tools' accessibility."
        />
        <ImageHoverBox
          image={shahid}
          name={"Mohammed Shahid (COO)"}
          width={"300px"}
          height={"320px"}
          description="Co-founder, IIM Indore alumnus, from humble beginnings to EdTech leader, founded 'alpha IPMAT', instrumental in shaping Opengrad's vision.
"
        />
      </div>
    </div>
  );
}