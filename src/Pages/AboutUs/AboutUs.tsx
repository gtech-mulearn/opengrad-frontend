import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { OurPartners } from "../../Components/OurPartners/OurPartners";
import { AdvisoryPanel } from "./Components/AdvisoryPanel/AdvisoryPanel";
import { FoundersSection } from "./Components/FoundersSection/FoundersSection";
import { Header } from "./Components/Header/Header";
import { OurJourney } from "./Components/OurJourney/OurJourney";

import ignite from "../assets/Partners/ignite.png";
import nuale from "../assets/Partners/nuals.png";
import indore from "../assets/Partners/indore.png";
import mulearn from "../assets/Partners/mulearn.png";
export const AboutUs = () => {
  const partnersData = [
    { image: nuale, name: "Nuale" },
    { image: ignite, name: "Ignite" },
    { image: indore, name: "indore" },
    { image: mulearn, name: "mulearn" },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <FoundersSection />
      <OurJourney />
      <AdvisoryPanel />
      <OurPartners partners={partnersData} />
      <Footer />
    </div>
  );
};
