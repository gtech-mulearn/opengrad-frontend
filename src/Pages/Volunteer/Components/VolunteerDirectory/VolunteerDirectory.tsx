import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./VolunteerDirectory.module.css";

import ansil from "../../../assets/VolunteerDirectory/ANSIL BAYAN.png";
import aadia from '../../../assets/VolunteerDirectory/AADIA NAIR.png'
import arjun from '../../../assets/VolunteerDirectory/ARJUN P RAJ.png'
import reshma from '../../../assets/VolunteerDirectory/RESHMA GEORGE.png'
import riya from "../../../assets/VolunteerDirectory/RIYA NEEMA.png";
import { ArrowRight } from "../../../../assets/svg";

type Props = {};

export const VolunteerDirectory = (_props: Props) => {
  return (
    <div className={styles.VolunteerDirectory}>
      <SectionHeading title="Volunteer Directory" />
      <div>
        <ImageHoverBox
          image={ansil}
          name="ANSIL BAYAN"
          description="NIT CALICUT"
          width=""
          height=""
        />
        <ImageHoverBox
          image={aadia}
          name="AADIA NAIR"
          description="NUALS KOCHI"
          width=""
          height=""
        />
        <ImageHoverBox
          image={arjun}
          name="ARJUN P RAJ"
          description="IIM INDORE"
          width=""
          height=""
        />
        <ImageHoverBox
          image={reshma}
          name="RESHMA GEORGE"
          description="IIM INDORE"
          width=""
          height=""
        />
        <ImageHoverBox
          image={riya}
          name="RIYA NEEMA"
          description="IIM INDORE"
          width=""
          height=""
        />
      </div>
      <button>See More<ArrowRight /></button>
    </div>
  );
};
