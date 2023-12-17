import styles from "./Header.module.css";
import image from "./imageAbout.png";
import { Visionsvg } from "./svg";
type Props = {};

export const Header = (_props: Props) => {
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.DetailWrapper}>
        <div className={styles.Content}>
          <div className={styles.TopInner}>
            <p>ABOUT US</p>
          </div>
          <h2>
            Empowered by&nbsp;<div>Community</div>, Committed<p>to</p>&nbsp;
            <div>Giving Back</div>
          </h2>
        </div>
        <div className={styles.MapWrapper}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.VisionWrap}>
        <div>
          <h2>Our Vision</h2>
          <p>
            Ensure equal access to high-quality entrance exam coaching for
            underprivileged youth. Through our community-driven tech platform,
            we aim to empower them with the opportunity to achieve the benefits
            of elite college education and enhance their life prospects.
          </p>
        </div>
        <Visionsvg />
      </div>
    </div>
  );
};
