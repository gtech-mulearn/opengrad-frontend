import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { OurPartners } from "../../Components/OurPartners/OurPartners";
import { CounterContainer } from "./Components/CounterContainer/CounterContainer";
import { Header } from "./Components/Header/Header";
import { OurStory } from "./Components/OurStory/OurStory";
import { OurWorks } from "./Components/OurWorks/OurWorks";
import { ProblemScenario } from "./Components/ProblemScenario/ProblemScenario";
import { WhyOpengrad } from "./Components/WhyOpengrad/WhyOpengrad";
import styles from './Home.module.css'

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div className={styles.HomePageWrapper}>
      <Navbar />
      <Header />
      <CounterContainer />
      <ProblemScenario />
      <WhyOpengrad />
      <OurStory />
      <OurWorks />
      <OurPartners />
      <Footer />
    </div>
  );
};
