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
          name={"Sahil Sameer"}
          width={"300px"}
          height={"320px"}
          description="Builder of OpenGrad, MBA FROM IIM INDORE, & HUMANITARIAN"
        />
        <ImageHoverBox
          image={amith}
          name={"Amith Tony Joseph"}
          width={"300px"}
          height={"320px"}
          description="Innovations head, Ex Founder - Alpha study memix.com"
        />
        <ImageHoverBox
          image={shahid}
          name={"Mohammed Shahid CO"}
          width={"300px"}
          height={"320px"}
          description="ENGINEERING GRAD PASSIONATE ABOUT PRODUCTS, BRIDGING TECH AND MANAGEMENT."
        />
      </div>
    </div>
  );
}