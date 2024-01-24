import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { MentorshipSection } from "./Components/MentorshipSection/MentorshipSection";
import styles from "./Courses.module.css";

type Props = {};

export const Courses = (_props: Props) => {
  return (
    <div className={styles.Coursewrapper}>
      <Navbar />
      <Header />
      <MentorshipSection />
      <Footer />
    </div>
  );
};
