import styles from './VolunteerStories.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import { SectionHeading } from '../../../../Components/SectionHeading/SectionHeading';

type Props = {}

export const VolunteerStories = (_props: Props) => {
  return (
    <div className={styles.VolunteerStoriesWrapper}>
      <SectionHeading title="Volunteer Stories" />
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={2}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}