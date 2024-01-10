import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { OurPartners } from "../../Components/OurPartners/OurPartners";
import { AdvisoryPanel } from "./Components/AdvisoryPanel/AdvisoryPanel";
import { FoundersSection } from "./Components/FoundersSection/FoundersSection";
import { Header } from "./Components/Header/Header";
import { OurJourneys } from "./Components/OurJourney/OurJourneys";

import nudge from "../assets/Partners/thenudge.png";
import nsr from "../assets/Partners/nsrcel.png";
import ignite from "../assets/Partners/ignite.png";
import nuale from "../assets/Partners/nuals.png";
// import indore from "../assets/Partners/indore.png";
import mulearn from "../assets/Partners/mulearn.png";
import ieee from "../assets/Partners/ieee.png";
import vikanasana from "../assets/Partners/vikasana.png";
export const AboutUs = () => {
  const partnersData = [
    {
      image: nudge,
      name: "The Nudge",
      name2: "Institute",
      para: "Guiding through the realm of the social sector.",
    },
    {
      image: nsr,
      name: "NSRCEL",
      name2: "IIM Bangalaore",
      para: "Facilitating progress through vital mentoring support.",
    },
    {
      image: nuale,
      name: "Legal Aid Clinic",
      name2: "NUALS Kochi",
      para: "Curating and disseminating CLAT Exam Resources.",
    },
    {
      image: ignite,
      name: "IGNITE  NIT",
      name2: "Calicut",
      para: "Working together to curate and disseminate JEE exam resources.",
    },
    // {
    //   image: indore,
    //   name: "IIM INDORE",
    //   para: "Founding institute of IPMAT program, completely curated by the IIM students.",
    // },
    {
      image: mulearn,
      name: "µLearn",
      name2: "Foundation",
      para: "Technology partner, decentralizing and democratizing education.",
    },
    {
      image: ieee,
      name: "IEEE",
      name2: "Kerala Section",
      para: "Dedicated to advancing technology for the benefit of humanity.",
    },
    {
      image: vikanasana,
      name: "Vikasana",
      name2: "IIM Bangalore",
      para: "Working together to curate and disseminate CAT exam resources.",
    },
  ];
  return (
    <div>
      <Navbar />
      <Header />
      <FoundersSection />
      <OurJourneys />
      <AdvisoryPanel />
      <OurPartners partners={partnersData} />
      <Footer />
    </div>
  );
};
