import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./ExploreCourse.module.css";
type Props = {};

export const ExploreCourse = (_props: Props) => {
  
  const datas = [
    { course: "IPMAT", link: "https://opengrad-foundation.learnyst.com/learn" },
    { course: "CLAT", link: "https://opengrad-foundation.learnyst.com/learn" },
    { course: "CUET", link: "https://opengrad-foundation.learnyst.com/learn" },
    {
      course: "MBA (CAT/XAT/NMAT/SNAP)",
      link: "https://opengrad-foundation.learnyst.com/learn",
    },
  ];

  return (
    <div className={styles.explorecourse}>
      <SectionHeading title="Explore our courses" />
      <div className={styles.gridSection}>
        {datas.map(({ course,link }, index) => {
          return <a href={link} target="_blank" key={index} >{course}</a>;
        })}
      </div>
    </div>
  );
};
