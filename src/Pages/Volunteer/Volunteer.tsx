import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Headers } from "./Components/Headers/Headers";
import { VolunteerDirectory } from "./Components/VolunteerDirectory/VolunteerDirectory";
import { WhyVolunteer } from "./Components/WhyVolunteer/WhyVolunteer";

type Props = {};

export const Volunteer = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Headers />
      <VolunteerDirectory />
      <WhyVolunteer />
      <Footer />
    </div>
  );
};
