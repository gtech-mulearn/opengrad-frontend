import styles from "./VolunteerStories.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import "./styles.css";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { DoubleQuotessvg } from "../../../Home/Components/OurStory/svg";


import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getVolunteerStories } from "./Api";

type Props = {};

type IndividualContainerProps = {
  para: string;
  name: string;
  descrp: string;
  image: string;
};

export const VolunteerStories = (_props: Props) => {
    const [data, setData] = useState<any[]>([]);


  const handleFetchDetails = async () => {
    try {
      const response = await getVolunteerStories();
      if (response) {
        setData(response);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);
  const [set, setset] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1400) {
      setset(true);
    }
  }, []);

  console.log(data)
  return (
    <div className={styles.VolunteerStoriesWrapper}>
      <SectionHeading title="Volunteer Stories" />
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={set ? 1 : 2}
          className="volunteerStories"
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination-container",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
        >
          {data.map(({ description, name, designation, image }) => {
            return (
              <SwiperSlide className={styles.SwiperSlide}>
                <IndividualContainer
                  para={description}
                  name={name}
                  descrp={designation}
                  image={image}
                />
              </SwiperSlide>
            );
          })}
          <div className="custom-pagination-container"></div>
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
        <div style={{ color: "#034852",textAlign:"left" }}>
          <h2 style={{textTransform:"uppercase"}}>{name}</h2>
          <p>{descrp}</p>
        </div>
      </div>
      <img src={image} alt={name} />
    </div>
  );
};
