import { ImageHoverBox } from "../../../../Components/ImageHoverBox/ImageHoverBox";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./VolunteerDirectory.module.css";

import { ArrowRight } from "../../../../assets/svg";
import { useEffect, useState } from "react";
import { getVolunteerDirectory } from "./Api";

type Props = {};

export const VolunteerDirectory = (_props: Props) => {


  const [data, setData] = useState<any[]>([]);
   const handleFetchDetails = async () => {
     try {
       const response = await getVolunteerDirectory();
       if (response) {
         setData(response);
       }
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     handleFetchDetails();
   }, []);
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
