import { useState, useEffect } from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./OurPartners.module.css";
import Marquee from "react-fast-marquee";

type Partner = {
  image: string;
  name: string;
  para?:string;
};

type OurPartnersProps = {
  partners: Partner[];
};

export const OurPartners = ({ partners }: OurPartnersProps) => {
 const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1700);

 useEffect(() => {
   const handleResize = () => {
     setIsScreenSmall(window.innerWidth < 1000);
   };

   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

 const marqParams = {
   autoFill: true,
   pauseOnHover: true,
   gradient: false,
   speed: 20,
   drag: true,
 };
  return (
    <div className={styles.Partners}>
      <SectionHeading title="Our Partners" />
      <div className={styles.PartnersImageWrapper}>
        {isScreenSmall ? (
          <Marquee {...marqParams} style={{ width: "100vw" }}>
            {partners.map((partner, index) => (
              <div key={index} style={{ padding: "0px 25px" }}>
                <img src={partner.image} alt={partner.name} />
                <h2>{partner.name}</h2>
                <p>{partner.para}</p>
              </div>
            ))}
          </Marquee>
        ) : (
          // Render the images without marquee for larger screens
          <div style={{ display: "flex" }}>
            {partners.map((partner, index) => (
              <div key={index} style={{ padding: "0px 20px" }}>
                <img src={partner.image} alt={partner.name} />
                <h2>{partner.name}</h2>
                <p>{partner.para}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
