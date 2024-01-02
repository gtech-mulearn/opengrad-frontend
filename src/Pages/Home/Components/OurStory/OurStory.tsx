import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from "./OurStory.module.css";
import amith from "../../../assets/founders/amith.png";
import sahil from "../../../assets/founders/sahil.png";
import shahid from "../../../assets/founders/shahid.png";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { DoubleQuotessvg } from "./svg";
import test1 from "./assets/test1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Pagination } from "swiper/modules";
type Props = {};

export const OurStory = (_props: Props) => {
  return (
    <div className={styles.OurStoryWrapper}>
      <SectionHeading title="Our Story" />
      <div className={styles.DetailSectionWrapper}>
        <div className={styles.foundersWrapper}>
          <p>
            Crafted with compassion, Opengrad Foundation emerged from a
            collective belief in Education for All. Our mission is to enable the
            next generation to access elite higher education, fostering a
            society where everyone can dream without fear.
          </p>
          <h3>
            <div></div>
            <p>THE FOUNDERS</p>
            <div></div>
          </h3>
          <div className={styles.ImageBoxWrapper}>
            <ImageHoverBox
              image={sahil}
              name={"Sahil Sameer"}
              width={""}
              height={""}
              description="Chief Executive Officer"
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/sahil-sameer/"
            />
            <ImageHoverBox
              image={amith}
              name={"Amith Tony Joseph"}
              width={""}
              height={""}
              description="Chief Technical Officer "
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/amith-tj/"
            />
            <ImageHoverBox
              image={shahid}
              name={"Mohammed Shahid CO"}
              width={""}
              height={""}
              description="Chief Operations Officer"
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/shahidco/"
            />
          </div>
        </div>
        <div className={styles.SliderTestimonialWrapper}>
          <h3>TESTIMONIALS</h3>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="OurStory"
            loop={true}
          >
            <SwiperSlide>
              <TestimonialIndividuals />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialIndividuals />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialIndividuals />
            </SwiperSlide>

            <SwiperSlide>
              <TestimonialIndividuals />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const TestimonialIndividuals = () => {
  return (
    <div className={styles.IndividualSlider}>
      <div className={styles.Topset}>
        <DoubleQuotessvg />
      </div>
      <div className={styles.testContentWrap}>
        <div className={styles.TextContent}>
          <p>
            Excited about Opengrad! It connects all, offering free and top-notch
            content for competitive exam prep.
          </p>
          <div>
            <h3>Dr. Gopichand Katragadda</h3>
            <p>Founder and CEO at Myelin Foundry</p>
          </div>
        </div>
        <img src={test1} alt="" />
      </div>
    </div>
  );
};
