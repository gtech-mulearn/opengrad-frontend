import styles from "./Navbar.module.css";
import logo from "../../../loader.png";
import { useState, useEffect } from "react";
import { useReactPath } from "./path.hook";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
type Props = {};

export const Navbar = (_props: Props) => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = ["Home", "about Us", "Our Work", "Join Us", "Our Blog"];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div
      className={styles.navbarWrapper}
      style={{ background: navbg ? "rgba(255,255,255,1)" : "transparent" }}
    >
      <div className={styles.navbarLeft}>
        <a href="/home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className={styles.navbarRight}>
        <div>
          {navContent.map((content, i) => (
            <a
              href={`/${content.toLowerCase().replace(/\s+/g, "")}`}
              key={i.toString() + content}
            >
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: window.location.href.includes(
                    `/${content.toLowerCase().replace(/\s+/g, "")}`
                  )
                    ? "#05B570"
                    : "#696969",
                }}
              >
                {content}
              </p>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.navbarMobile}>
        <button className={styles.menuMd} onClick={openMenu}>
          <MdMenu />
        </button>
        {openmenu && (
          <div>
            <button className={styles.menuMd} onClick={openMenu}>
              <IoMdClose />
            </button>
            {navContent.map((content, i) => (
              <a
                href={`/${content.toLowerCase().replace(/\s+/g, "")}`}
                key={i.toString() + content}
              >
                <p
                  style={{
                    color: window.location.href.includes(
                      `/${content.toLowerCase().replace(/\s+/g, "")}`
                    )
                      ? "#05B570"
                      : "#696969",
                  }}
                >
                  {content}
                </p>
              </a>
            ))}
            <button className={styles.StudyButton}>
              <a href="http://app.mulearn.org">Study Now</a>
            </button>
          </div>
        )}
      </div>{" "}
      <button className={styles.StudyButton}>
        <a href="http://app.mulearn.org">Study Now</a>
      </button>
    </div>
  );
};
