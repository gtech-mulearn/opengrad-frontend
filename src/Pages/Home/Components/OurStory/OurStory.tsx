import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from "./OurStory.module.css";
import amith from "../../../assets/founders/amith.png";
import sahil from "../../../assets/founders/sahil.png";
import shahid from "../../../assets/founders/shahid.png";
// import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { DoubleQuotessvg } from "./svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect,  useState } from "react";
import { getTestimonial } from "./Api";

type Props = {};

export const OurStory = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  // const progressCircle = useRef<HTMLDivElement>(null);
  // const progressContent = useRef<HTMLDivElement>(null);
  // const onAutoplayTimeLeft = ( time: number, progress: number) => {
  //   if (progressCircle.current) {
  //     progressCircle.current.style.setProperty(
  //       "--progress",
  //       `${(1 - progress) * 100}%`
  //     );
  //   }

  //   if (progressContent.current) {
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
   
  // };

  const handleFetchDetails = async () => {
    try {
      const response = await getTestimonial();
      if (response) {
        setData(response);
        // console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  return (
    <div className={styles.OurStoryWrapper}>
      {/* <SectionHeading title="Our Story" /> */}
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
              description="Chief Technology Officer "
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/amith-tj/"
            />
            <ImageHoverBox
              image={shahid}
              name={"Mohammed Shahid CO"}
              width={""}
              height={""}
              description="Chief Operating Officer"
              className={styles.ImageBox}
              linkedIn="https://www.linkedin.com/in/shahidco/"
            />
          </div>
        </div>
        <div className={styles.SliderTestimonialWrapper}>
          <h3>TESTIMONIALS</h3>
          <Swiper
            watchSlidesProgress={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="OurStory"
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            
          >
            {data.map(({ description, name, designation, image }) => {
              return (
                <SwiperSlide>
                  <TestimonialIndividuals
                    description={description}
                    name={name}
                    designation={designation}
                    image={image}
                  />
                </SwiperSlide>
              );
            })}
            
          </Swiper>
        </div>
      </div>
    </div>
  );
};


interface Testimonial {
  image: string;
  name: string;
  designation: string;
  description: string;
}

export const TestimonialIndividuals = ({
  name,
  image,
  designation,
  description,
}: Testimonial) => {
  return (
    <div className={styles.IndividualSlider}>
      <div className={styles.Topset}>
        <DoubleQuotessvg />
      </div>
      <div className={styles.testContentWrap}>
        <div className={styles.TextContent}>
          <p>{description}</p>
          <div>
            <h3>{name}</h3>
            <p>{designation}</p>
          </div>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
