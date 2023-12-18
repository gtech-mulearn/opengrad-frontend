import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { GetStarted } from "./Components/GetStarted/GetStarted";
import { Headers } from "./Components/Headers/Headers";
import { VolunteerDirectory } from "./Components/VolunteerDirectory/VolunteerDirectory";
import { VolunteerPositions } from "./Components/VolunteerPositions/VolunteerPositions";
import { VolunteerStories } from "./Components/VolunteerStories/VolunteerStories";
import { WhyVolunteer } from "./Components/WhyVolunteer/WhyVolunteer";

type Props = {};

export const Volunteer = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Headers />
      <VolunteerDirectory />
      <WhyVolunteer />
      <VolunteerStories />
      <GetStarted />
      <VolunteerPositions />
      <Footer />
    </div>
  );
};
