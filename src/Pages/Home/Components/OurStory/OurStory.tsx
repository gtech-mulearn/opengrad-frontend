import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from "./OurStory.module.css";
import amith from "../../../assets/founders/amith.png";
import sahil from "../../../assets/founders/sahil.png";
import shahid from "../../../assets/founders/shahid.png";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { DoubleQuotessvg } from "./svg";
import test1 from "./assets/test1.png";

type Props = {};

export const OurStory = (_props: Props) => {
  return (
    <div className={styles.OurStoryWrapper}>
      <SectionHeading title="Our Story" />
      <div className={styles.DetailSectionWrapper}>
        <div className={styles.foundersWrapper}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
          </p>
          <h3>THE FOUNDERS</h3>
          <div className={styles.ImageBoxWrapper}>
            <ImageHoverBox
              image={sahil}
              name={"Sahil Sameer"}
              width={""}
              height={""}
              description="Builder of OpenGrad"
              className={styles.ImageBox}
            />
            <ImageHoverBox
              image={amith}
              name={"Amith Tony Joseph"}
              width={""}
              height={""}
              description="Co-Founder & Product Lead"
              className={styles.ImageBox}
            />
            <ImageHoverBox
              image={shahid}
              name={"Mohammed Shahid CO"}
              width={""}
              height={""}
              description="Co-Founder, OpenGrad"
              className={styles.ImageBox}
            />
          </div>
        </div>
        <div className={styles.SliderTestimonialWrapper}>
          <div className={styles.IndividualSlider}>
            <div className={styles.Topset}>
              <DoubleQuotessvg />
              <h3>TESTIMONIALS</h3>
            </div>
            <div className={styles.testContentWrap}>
              <div className={styles.TextContent}>
                <p>
                  Excited about Opengrad! It connects all, offering free and
                  top-notch content for competitive exam prep.
                </p>
                <div>
                  <h3>Dr. Gopichand Katragadda</h3>
                  <p>Founder and CEO at Myelin Foundry</p>
                </div>
              </div>
              <img src={test1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
