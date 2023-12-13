import { ArrowRight } from "../../../../assets/svg";
import background from "../../../assets/backgroundLines.png";
import styles from "./Header.module.css";
import map from "./mapIndia.png";

type Props = {};

export const Header = (_props: Props) => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.DetailSection}>
        <div className={styles.ContentWrapper}>
          <div className={styles.Title}>
            <h2>
              India’s first <span>Free</span> and<br></br>{" "}
              <span>Open Source</span> Entrance Exam Solution
            </h2>
            <div>
              <p>
                We enable high leverage opportunities for marginalized youth of
                our nation using community and tech based learning solutions
              </p>
              <p style={{ color: "#7B7B7B" }}>
                Check out how we are democratizing entrance education in India.
              </p>
            </div>
          </div>
          <div className={styles.ButtonWrapper}>
            <button style={{ backgroundColor: "#00272D",color:"white" }}>Study Now</button>
            <button>
              Explore
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.MapWrapper}>
          <img src={map} alt="" />
        </div>
      </div>
      <div className={styles.LinesWrapper}>
        <img src={background} alt="" />
      </div>
      <div className={styles.CloudWrapper}></div>
    </div>
  );
};
