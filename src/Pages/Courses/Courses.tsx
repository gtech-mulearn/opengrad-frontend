import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./Courses.module.css";

type Props = {};

export const Courses = (_props: Props) => {
  return (
    <div className={styles.Coursewrapper}>
      <Navbar />
      <div></div>
      <Footer />
    </div>
  );
};
