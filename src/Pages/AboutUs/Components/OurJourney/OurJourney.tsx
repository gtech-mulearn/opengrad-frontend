import { useEffect, useRef } from "react";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import styles from "./OurJourney.module.css";

type Props = {};

export const OurJourney = (_props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      // Check if the horizontal scroll is not at the end
      const isHorizontalScrollEnd =
        container.scrollWidth <= container.scrollLeft + container.offsetWidth;

      // If horizontal scrolling is active and not at the end, prevent vertical scroll
      if (!isHorizontalScrollEnd) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel);

    // Cleanup function
    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);
  const data = [
    {
      color: "rgba(5, 181, 112, 0.1)",
      divHeight: "20%",
      text: "Shahid starts a community sourced Ed Tech platform for IPMAT caoching.",
      year: "2018",
    },
    {
      color: "rgba(5, 181, 112, 0.2)",
      divHeight: "25%",
      text: "Sahil being a part of the founding team @keralarecue.in",
      year: "2019",
    },
    {
      color: "rgba(5, 181, 112, 0.3)",
      divHeight: "35%",
      text: "Sahil starts giving CAT coaching and mentorship for aspirants.",
      year: "2020",
    },
    {
      color: "rgba(5, 181, 112, 0.5)",
      divHeight: "45%",
      text: "AlphaIpmat shifts to an open for all community platform.",
      year: "2021",
    },
    {
      color: "rgba(5, 181, 112, 0.7)",
      divHeight: "55%",
      text: "Initial plan and early build of Opengrad platform.",
      year: "2022",
    },
    {
      color: "rgba(5, 181, 112, 0.8)",
      divHeight: "62%",
      text: "Shahid starts a community sourced Ed Tech platform for IPMAT caoching.",
      year: "2023",
    },
    {
      color: "rgba(5, 181, 112, 1)",
      divHeight: "70%",

      text: "Shahid starts a community sourced Ed Tech platform for IPMAT caoching.",
      year: "2024",
    },
  ];

  return (
    <div>
      <SectionHeading title="Our Journey" />
      <div ref={containerRef} className={styles.container} id="container">
        {data.map(({ color, divHeight, text, year }) => {
          return (
            <div className={styles.IndividualContainer}>
              <div className={styles.lineCircle}>
                <div
                  style={{ height: `calc(150% - ${divHeight} )` }}
                  className={styles.line}
                ></div>
                <div className={styles.circle}></div>
              </div>
              <h3>{year}</h3>
              <div
                style={{
                  backgroundColor: color,
                  height: divHeight,
                  flexShrink: 0,
                }}
                className={styles.text}
              >
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
