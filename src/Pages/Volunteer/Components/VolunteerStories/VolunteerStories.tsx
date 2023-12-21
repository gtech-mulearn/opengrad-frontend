import styles from "./VolunteerStories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { DoubleQuotessvg } from "../../../Home/Components/OurStory/svg";
import vs1 from "./assets/vs1.png";
import vs2 from "./assets/vs2.png";

import "./styles.css";
import { Pagination } from "swiper/modules";

type Props = {};

type IndividualContainerProps = {
  para: string;
  name: string;
  descrp: string;
  image: string;
};

export const VolunteerStories = (_props: Props) => {
  const data = [
    {
      para: "Excited about OpenGrad! It connects all, offering free & top-notch content for competitive exam prep.",
      name: "RESHI KIRAN",
      descrp: "IIT ROORKEE ‘18",
      image: vs1,
    },
    {
      para: "The need of the hour: Accessibility for all in entrance coaching",
      name: "Rithwik S",
      descrp: "BITS PILANI",
      image: vs2,
    },
    {
      para: "Excited about OpenGrad! It connects all, offering free & top-notch content for competitive exam prep.",
      name: "RESHI KIRAN",
      descrp: "IIT ROORKEE ‘18",
      image: vs1,
    },
    {
      para: "The need of the hour: Accessibility for all in entrance coaching",
      name: "Rithwik S",
      descrp: "BITS PILANI",
      image: vs2,
    },
    {
      para: "Excited about OpenGrad! It connects all, offering free & top-notch content for competitive exam prep.",
      name: "RESHI KIRAN",
      descrp: "IIT ROORKEE ‘18",
      image: vs1,
    },
    {
      para: "The need of the hour: Accessibility for all in entrance coaching",
      name: "Rithwik S",
      descrp: "BITS PILANI",
      image: vs2,
    },
    {
      para: "Excited about OpenGrad! It connects all, offering free & top-notch content for competitive exam prep.",
      name: "RESHI KIRAN",
      descrp: "IIT ROORKEE ‘18",
      image: vs1,
    },
    {
      para: "The need of the hour: Accessibility for all in entrance coaching",
      name: "Rithwik S",
      descrp: "BITS PILANI",
      image: vs2,
    },
  ];
  return (
    <div className={styles.VolunteerStoriesWrapper}>
      <SectionHeading title="Volunteer Stories" />
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={2}
          className="volunteerStories"
          loop={true}
          pagination={true}
          modules={[Pagination]}
        >
          {data.map(({ para, name, descrp, image }) => {
            return (
              <SwiperSlide className={styles.SwiperSlide}>
                <IndividualContainer
                  para={para}
                  name={name}
                  descrp={descrp}
                  image={image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const IndividualContainer = ({
  para,
  name,
  descrp,
  image,
}: IndividualContainerProps) => {
  return (
    <div className={styles.IndividualContainer}>
      <div className={styles.Details}>
        <div className={styles.Toper}>
          <DoubleQuotessvg />
          <p>{para}</p>
        </div>
        <div>
          <h2>{name}</h2>
          <p>{descrp}</p>
        </div>
      </div>
      <img src={image} alt={name} />
    </div>
  );
};
