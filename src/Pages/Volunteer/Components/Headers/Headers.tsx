import { ArrowRight } from "../../../../assets/svg";
import styles from "./Headers.module.css";
import img1 from "./assets/img1.png";
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import img5 from "./assets/img5.png";

type Props = {};

export const Headers = (_props: Props) => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.BackgroundText}>
        <h1>VOLUNTEER</h1>
      </div>
      <div className={styles.DetailWrapper}>
        <div className={styles.Content}>
          <div className={styles.TopInner}>
            <p>VOLUNTEER</p>
          </div>
          <div>
            <h2>
              Join OpenGrad's &nbsp;<div>Volunteer</div>&nbsp;Program
            </h2>
            <p>
              Do you have what it takes to democratize one of the most exploited
              industries across the country, one of the most plagued issues
              hindering the underserved communities! Volunteer with the OpenGrad
              Foundation to join the revolution of making entrance coaching free
              and accessible, enabling millions of underserved Indians to
              realize their dreams.
            </p>
          </div>
          <div>
            <button>Join Us</button>
            <button>
              Explore
              <ArrowRight color="black" />
            </button>
          </div>
        </div>
        <div className={styles.MapWrapper}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};
