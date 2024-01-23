import styles from "./Header.module.css";
import image from "./mapIndiaWithLogo.png";
import googleplay from './googleplay.png'

type Props = {};

export const Header = (_props: Props) => {

  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.BackgroundText}>
        <h1>COURSES</h1>
      </div>
      <div className={styles.DetailWrapper}>
        <div className={styles.Content}>
          <div className={styles.TopInner}>
            <p>COURSES</p>
          </div>
          <p>
            At the heart of our academic success is peer-to-peer education,
            which makes studying at opengrad seem more like studying with a
            friend.
          </p>
          <h2>
            <div>Live + Recorded Classes</div>&nbsp;
            <p>AI Study Assistant</p>
           Mentorship&nbsp;<div>Mock Tests</div>&nbsp;<p>Open for All</p>
          Mobile application&nbsp;<div>and many more features</div>
          </h2>
          <button><img src={googleplay} alt="" /></button>
        </div>
        <div className={styles.MapWrapper}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
