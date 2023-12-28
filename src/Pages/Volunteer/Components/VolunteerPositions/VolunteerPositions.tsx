import styles from "./VolunteerPositions.module.css";
import { Foursvg, Onesvg, Threesvg, Twosvg } from "./svg";

type Props = {};

export const VolunteerPositions = (_props: Props) => {
  const data = [
    {
      id: 1,
      Svg: <Onesvg />,
      head: "Mentorship Volunteers",
      para: "OpenGrad foundation seeks top-tier institute graduates to mentor underrepresented students and transform their lives.",
    },
    {
      id: 2,
      Svg: <Twosvg />,
      head: "Content Development Volunteers",
      para: "Join OpenGrad to create relatable educational content, teach, and transform the educational landscape of India.",
    },
    {
      id: 3,
      Svg: <Threesvg />,
      head: "Technical Volunteers",
      para: "You are a tech enthusiast who can help us build the next big breakthrough in Indian ed-tech ecosystem ",
    },
    {
      id: 4,
      Svg: <Foursvg />,
      head: "Outreach Volunteers",
      para: "Work with us to enhance awareness and accessibility in education, training students through offline services",
    },
  ];
  return (
    <div className={styles.VolunteerPositionsWrapper}>
      {data.map(({  head, para,Svg }) => {
        return (
          <div className={styles.IndividualContainer}>
            <div>
              <div>{Svg}</div>
              <h2>{head}</h2>
            </div>
            <p>{para}</p>
          </div>
        );
      })}
    </div>
  );
};
