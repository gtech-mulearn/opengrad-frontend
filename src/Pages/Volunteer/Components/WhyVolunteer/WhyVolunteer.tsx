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
    bgs: isHovered ? "white" : "rgba(3, 72, 82, 0.2)",
    colors: isHovered ? "#05B570" : "rgba(3, 72, 82, 1)",
  };

  
  return (
    <div className={styles.WhyVolunteerWrap}>
      <SectionHeading title="Why Volunteer?" />
      <div>
        <IndividualContainer
          Svgs={Peoplesvg}
          svgProps={{ bg: "rgba(3, 72, 82, 0.2)", color: "rgba(3, 72, 82, 1)" }}
          headings=""
          para=""
          style={containerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />{" "}
        <IndividualContainer
          Svgs={Pensvg}
          svgProps={{ bg: "rgba(3, 72, 82, 0.2)", color: "rgba(3, 72, 82, 1)" }}
          headings=""
          para=""
          style={containerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />{" "}
        <IndividualContainer
          Svgs={Burgsvg}
          svgProps={{ bg: "rgba(3, 72, 82, 0.2)", color: "rgba(3, 72, 82, 1)" }}
          headings=""
          para=""
          style={containerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />{" "}
        <IndividualContainer
          Svgs={Ticksvg}
          svgProps={{ bg: "rgba(3, 72, 82, 0.2)", color: "rgba(3, 72, 82, 1)" }}
          headings=""
          para=""
          style={containerStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
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
  };
  const svgStyle = {
    bg: isHovered ? "white" : svgProps?.bg,
    color: isHovered ? "#05B570" : svgProps?.color,
  };
  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Svgs {...svgStyle} />
      <h2>{headings}</h2>
      <p>{para}</p>
    </div>
  );
};
