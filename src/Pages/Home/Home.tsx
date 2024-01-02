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

// Partners data

import nudge from '../assets/Partners/thenudge.png'
import nsr from '../assets/Partners/nsrcel.png'
import ignite from '../assets/Partners/ignite.png'
import nuale from "../assets/Partners/nuals.png";
import viknasana from "../assets/Partners/vikasana.png";
import ieee from "../assets/Partners/ieee.png";

export const Home = () => {
   const partnersData = [
     { image: nudge, name: "" },
     { image: nsr, name: "" },
     { image: ignite, name: "" },
     { image: nuale, name: "" },
     { image: viknasana, name: "" },
     { image: ieee, name: "" },
   ];

  return (
    <div className={styles.HomePageWrapper}>
      <Navbar />
      <Header />
      <CounterContainer />
      <ProblemScenario />
      <WhyOpengrad />
      <OurStory />
      <OurWorks />
      <OurPartners partners={partnersData} />
      <Footer />
    </div>
  );
};
