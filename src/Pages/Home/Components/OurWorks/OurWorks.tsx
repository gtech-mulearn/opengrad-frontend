import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./OurWorks.module.css";
import w1 from "./assets/w1.png";
import w2 from "./assets/w2.png";
import w3 from "./assets/w3.png";
import w4 from "./assets/w4.png";
import w5 from "./assets/w5.png";
import w6 from "./assets/w6.png";

type Props = {
  image: string;
  par: string;
};

export const OurWorks = () => {
  return (
    <div className={styles.OurWorkWrapper}>
      {" "}
      <SectionHeading title="Our Works" />
      <div className={styles.WorksWrapper}>
        
        <Container
          image={w1}
          par="Inauguration at Alpha Study Center, Kozhikode"
        />{" "}
        <Container
          image={w2}
          par="Inauguration at Alpha Study Center, Kozhikode"
        />{" "}
        <Container
          image={w3}
          par="Inauguration at Alpha Study Center, Kozhikode"
        />{" "}
        <Container
          image={w4}
          par="Inauguration at Alpha Study Center, Kozhikode"
        />{" "}
        <Container
          image={w5}
          par="Inauguration at Alpha Study Center, Kozhikode"
        />{" "}
        <Container
          image={w6}
          par="Inauguration at Alpha Study Center, Kozhikode"
        />
      </div>
    </div>
  );
};

const Container = ({ image, par }: Props) => {
  return (
    <div className={styles.Container}>
      <img src={image} alt="" />
      <div className={styles.InnerDiv}>
        <p>{par}</p>
      </div>
    </div>
  );
};
