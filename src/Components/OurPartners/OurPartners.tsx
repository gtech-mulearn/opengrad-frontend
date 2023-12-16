import { SectionHeading } from "../SectionHeading/SectionHeading";
import styles from './OurPartners.module.css'


type Partner = {
  image: string;
  name: string;
};

type OurPartnersProps = {
  partners: Partner[];
};

export const OurPartners = ({ partners }: OurPartnersProps) => {
  return (
    <div className={styles.Partners}>
      <SectionHeading title="Our Partners" />
      <div className={styles.PartnersImageWrapper}>
        {partners.map((partner, index) => (
          <div key={index}>
            <img src={partner.image} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
};