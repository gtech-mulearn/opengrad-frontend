import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./VolunteerDirectory.module.css";

import ansil from "../../../assets/VolunteerDirectory/ANSIL BAYAN.png";
import aadia from "../../../assets/VolunteerDirectory/AADIA NAIR.png";
import arjun from "../../../assets/VolunteerDirectory/ARJUN P RAJ.png";
import reshma from "../../../assets/VolunteerDirectory/RESHMA GEORGE.png";
import riya from "../../../assets/VolunteerDirectory/RIYA NEEMA.png";
import { ArrowRight } from "../../../../assets/svg";

type Props = {};

export const VolunteerDirectory = (_props: Props) => {
  const data = [
    {
      image: ansil,
      name: "ANSIL BAYAN",
      description: "NIT CALICUT",
    },
    {
      image: aadia,
      name: "AADIA NAIR",
      description: "NUALS KOCHI",
    },
    {
      image: arjun,
      name: "ARJUN P RAJ",
      description: "IIM INDORE",
    },
    {
      image: reshma,
      name: "RESHMA GEORGE",
      description: "IIM INDORE",
    },
    {
      image: riya,
      name: "RIYA NEEMA",
      description: "IIM INDORE",
    },
  ];
  return (
    <div className={styles.VolunteerDirectory}>
      <SectionHeading title="Volunteer Directory" />
      <div className={styles.imageContainer}>
        {data.map(({ image, name, description }) => {
          return (
            <ImageHoverBox
              image={image}
              name={name}
              description={description}
              width=""
              height=""
            />
          );
        })}
      </div>
      <div className={styles.buttonwrap}>
        <div></div>
        <button
          onClick={() =>
            window.open("https://volunteers-one.vercel.app/#", "_blank")
          }
        >
          See More
          <ArrowRight color="#05B570" />
        </button>
      </div>
    </div>
  );
};
