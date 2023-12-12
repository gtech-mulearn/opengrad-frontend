import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { OurPartners } from "../../Components/OurPartners/OurPartners";
import { AdvisoryPanel } from "./Components/AdvisoryPanel/AdvisoryPanel";
import { FoundersSection } from "./Components/FoundersSection/FoundersSection";
import { Header } from "./Components/Header/Header";
import { OurJourney } from "./Components/OurJourney/OurJourney";

type Props = {};

export const AboutUs = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Header />
      <FoundersSection />
      <OurJourney />
      <AdvisoryPanel />
      <OurPartners />
      <Footer />
    </div>
  );
};
