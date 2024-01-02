import styles from "./Footer.module.css";
import logo from "../../../loader.png";
import { Facebook, FacebookFill, Instagram, InstagramFill, LinkedIn, LinkedInFill, Youtube, YoutubeFill } from "./svg";
type Props = {};

export const Footer = (_props: Props) => {
  return (
    <div className={styles.FooterWrapper}>
      <div className={styles.TopSection}>
        <img src={logo} alt="" />
        <p>OpenGrad’s journey is fueled by compassion and empowerment.</p>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.left}>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Refund Policy</a>
        </div>
        <div className={styles.Social}>
          <a href="" target="_blank" className={styles.iconLink}>
            <Facebook className={styles.iconDefault} />
            <FacebookFill className={styles.iconFill} />
          </a>
          <a
            href="https://www.instagram.com/opengradfoundation"
            target="_blank"
            className={styles.iconLink}
          >
            <Instagram className={styles.iconDefault} />
            <InstagramFill className={styles.iconFill} />
          </a>
          <a href="" target="_blank" className={styles.iconLink}>
            <Youtube className={styles.iconDefault} />
            <YoutubeFill className={styles.iconFill} />
          </a>
          <a
            href="https://www.linkedin.com/company/opengrad-foundation/"
            target="_blank"
            className={styles.iconLink}
          >
            <LinkedIn className={styles.iconDefault} />
            <LinkedInFill className={styles.iconFill} />
          </a>
        </div>
        <p>© Copyright 2023 | OpenGrad Foundation</p>
      </div>
    </div>
  );
};
