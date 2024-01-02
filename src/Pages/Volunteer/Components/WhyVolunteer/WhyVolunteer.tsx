import { useState } from "react";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./WhyVolunteer.module.css";
import { Burgsvg, Pensvg, Peoplesvg, Ticksvg } from "./svg";

type SvgProps = {
  bg?: string;
  color?: string;
};

type Props = {
  Svgs: React.ComponentType<SvgProps>;
  svgProps?: SvgProps;
  headings: string;
  para: string;
};
type IndividualContainerProps = Props & {
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const WhyVolunteer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const containerStyle = {
    backgroundColor: isHovered ? "#05B570" : "white",
    color: isHovered ? "#fff" : "black",
  };

  const data = [
    {
      Svg: Peoplesvg,
      heading: "Community",
      para: `Join the largest community of Top institution alumnus, students and veteran fighting for a mission to uplift underserved communities through fair access to education.`,
    },
    {
      Svg: Pensvg,
      heading: "Ownership",
      para: `Will have complete ownership, with a freedom to challenge the system, experiment and fine tune to perfection.`,
    },
    {
      Svg: Burgsvg,
      heading: "Connects",
      para: `We are supported by some of the pioneers in the entrepreneurship, corporate and social sectors and it's your turn to work with them to make a difference.`,
    },
    {
      Svg: Ticksvg,
      heading: "Cause",
      para: `Be the part of the mission to make Education in India truly Free and Fair as it claims by democratizing the unfair part of it - Entrance coaching.`,
    },
  ];
  return (
    <div className={styles.WhyVolunteerWrap}>
      <SectionHeading title="Why Volunteer?" />
      <div>
        {data.map(({ Svg, heading, para }) => {
          return (
            <IndividualContainer
              Svgs={Svg}
              svgProps={{
                bg: "rgba(3, 72, 82, 0.2)",
                color: "rgba(3, 72, 82, 1)",
              }}
              headings={heading}
              para={para}
              style={containerStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

const IndividualContainer = ({
  Svgs,
  svgProps,
  headings,
  para,
  style,
  onMouseEnter,
  onMouseLeave,
}: IndividualContainerProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  const containerStyle = {
    ...style,
    backgroundColor: isHovered ? "#05B570" : "white",
    color: isHovered ? "#fff" : "#034852",
  };
  const svgStyle = {
    bg: isHovered ? "white" : svgProps?.bg,
    color: isHovered ? "#05B570" : svgProps?.color,
  };
  return (
    <div
      style={containerStyle }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.Individual}
    >
      <Svgs {...svgStyle} />
      <h2>{headings}</h2>
      <p>{para}</p>
    </div>
  );
};
