import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import styles from './OurStory.module.css'


type Props = {}

export const OurStory = (_props: Props) => {
  return (
    <div>
      <h1>Our Story</h1>
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
            <ImageHoverBox />
            <ImageHoverBox />
            <ImageHoverBox />
          </div>
        </div>
        <div className={styles.SliderTestimonialWrapper}></div>
      </div>
    </div>
  );
}