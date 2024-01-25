import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from './ExploreCourse.module.css'
type Props = {};

export const ExploreCourse = (_props: Props) => {
  const data = ["IPMAT", "CLAT", "CUET", "MBA (CAT/XAT/NMAT/SNAP)"];

  return (
    <div className={styles.explorecourse}>
      <SectionHeading title="Explore our courses" />
      <div className={styles.gridSection}>
        {data.map((course, index) => {
          return <div key={index}>{course}</div>;
        })}
      </div>
    </div>
  );
};