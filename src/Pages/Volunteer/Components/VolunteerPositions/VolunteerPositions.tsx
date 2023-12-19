import styles from "./VolunteerPositions.module.css";
import { Foursvg, Onesvg, Threesvg, Twosvg } from "./svg";

type Props = {};

export const VolunteerPositions = (_props: Props) => {
  const data = [
    {
      id: 1,
      Svg: <Onesvg />,
      head: "Mentorship Volunteers",
      para: "OpenGrad foundation believes in creating relatable role models for the students from underrepresented communities, and if you are someone who has cracked into a top tier institute for any of the courses, you can give it back to the community by joining us as a mentor. You can take the ownership of training a few selected students and transform their lives.",
    },
    {
      id: 2,
      Svg: <Twosvg />,
      head: "Content Development Volunteers",
      para: "The educational resources in OpenGrad are all prepared by the students and graduates of top institutes across the country. This creates very relatable content for the students to follow and is a key USP of OpenGrad. Join us if you have a flair in teaching, content development and most importantly transform the educational landscape of India",
    },
    {
      id: 3,
      Svg: <Threesvg />,
      head: "Technical Volunteers",
      para: "OpenGrad Foundation is a tech driven organization and we are developing a lot of inhouse tech capabilities that can revolutionize the entrance coaching landscape. If you are a tech enthusiast who can help us build the next big breakthrough in Indian education system.",
    },
    {
      id: 4,
      Svg: <Foursvg />,
      head: "Outreach Volunteers",
      para: "Resources is not the single biggest problem faced by the underrepresented communities in getting into the tier 1 institutions. It happens through bridging the awareness & accessibility challenge. Join us if you are ready to take our services offline, reaching out to educational institutions and help us train the students.",
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
