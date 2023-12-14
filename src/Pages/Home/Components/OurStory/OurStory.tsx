import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from './OurStory.module.css'
import amith from "../../../assets/founders/amith.png";
import sahil from '../../../assets/founders/sahil.png'
import shahid from "../../../assets/founders/shahid.png";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";


type Props = {}

export const OurStory = (_props: Props) => {
  return (
    <div className={styles.OurStoryWrapper}>
      <SectionHeading title="Our Story" />
      <div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
          </p>
          <h3>THE FOUNDERS</h3>
          <div>
            <ImageHoverBox
              image={sahil}
              name={"Sahil Sameer"}
              width={"250px"}
              height={"270px"}
              description="Builder of OpenGrad"
            />
            <ImageHoverBox
              image={amith}
              name={"Amith Tony Joseph"}
              width={"250px"}
              height={"270px"}
              description="Co-Founder & Product Lead"
            />
            <ImageHoverBox
              image={shahid}
              name={"Mohammed Shahid CO"}
              width={"250px"}
              height={"270px"}
              description="Co-Founder, OpenGrad"
            />
          </div>
        </div>
        <div className={styles.SliderTestimonialWrapper}></div>
      </div>
    </div>
  );
}