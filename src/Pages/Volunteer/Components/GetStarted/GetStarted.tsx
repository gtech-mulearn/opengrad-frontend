import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from './GetStarted.module.css'
type Props = {};

export const GetStarted = (_props: Props) => {
  return (
    <div className={styles.GetStartedWrapper}>
      <div>
        <SectionHeading title="Ready To Get Started?" />
        <p>
          By Joining Our Vibrant Community, You'll Be Part Of An Incredible
          Journey To Transform Education And Make A Difference In The Lives Of
          Underprivileged Students.
        </p>
      </div>
      <div>
        <h2>Who Can Volunteer</h2>
        <div>
          <div></div>
          <p>
            OpenGrad Foundation is a volunteer driven organization and we are
            looking for talented individuals from across disciplines to join us
            in the movement of democratizing the access to elite higher
            education.
          </p>
        </div>
      </div>
    </div>
  );
};
