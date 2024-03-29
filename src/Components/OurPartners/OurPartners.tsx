import { useState, useEffect } from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from "./OurPartners.module.css";
import Marquee from "react-fast-marquee";

type Partner = {
  image: string;
  name: string;
  name2?: string;
  para?: string;
};

type OurPartnersProps = {
  partners: Partner[];
};

export const OurPartners = ({ partners }: OurPartnersProps) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 2020);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 2000);
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
              <div key={index} style={{ padding: "0px 38px",textAlign:"center" }}>
                <img src={partner.image} alt={partner.name} />
                <div className={styles.name}>
                  <h2>{partner.name}</h2>
                  <h2>{partner.name2}</h2>
                </div>
                <p>{partner.para}</p>
              </div>
            ))}
          </Marquee>
        ) : (
          // Render the images without marquee for larger screens
          <div style={{ display: "flex" }}>
            {partners.map((partner, index) => (
              <div key={index} style={{ padding: "0px 10px" }}>
                <img src={partner.image} alt={partner.name} />
                <div className={styles.name}>
                  <h2>{partner.name}</h2>
                  <h2>{partner.name2}</h2>
                </div>
                <p>{partner.para}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
