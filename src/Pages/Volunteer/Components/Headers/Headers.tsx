import { ArrowRight } from "../../../../assets/svg";
import styles from "./Headers.module.css";

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
              Join OpenGrad's &nbsp;<div>Volunteer</div>Program
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
            <button>Explore<ArrowRight color="black"/></button>
          </div>
        </div>
        <div className={styles.MapWrapper}>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
