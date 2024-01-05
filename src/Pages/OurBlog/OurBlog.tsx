import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ArrowRight } from "../../assets/svg";
import { getBlogs } from "./Api";
import styles from "./OurBlog.module.css";
import { useState, useEffect } from "react";
import sound from "./assets/sound.png";

type Props = {};

export const OurBlog = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [activeComponent, setActiveComponent] =
    useState<string>("News and Updates");
  const [topBlogs, setTopBlogs] = useState<any[]>([]);
  const [count, setCount] = useState(6);

  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.category.includes(activeComponent)
    );
    setTopBlogs(filteredData);
  }, [activeComponent, data]);

  const handleCount = () => {
    setCount(count + 3);
  };
  const handleCountBack = () => {
    setCount(6);
  };
  const datas = [
    {
      name: "News and Updates",
      value: "News and Updates",
    },
    {
      name: "Events",
      value: "Events",
    },
    {
      name: "Campus Diaries",
      value: "Campus Diaries",
    },
    {
      name: "Insights",
      value: "Insights",
    },
  ];
  return (
    <div className={styles.Wrapper}>
      <Navbar />
      <div className={styles.HeaderWrapper}>
        <div className={styles.Header}>
          <div className={styles.BackgroundText}>
            <h1>Our Blogs</h1>
          </div>
          <div className={styles.DetailWrapper}>
            <div className={styles.TopInner}>
              <p>Our Blogs</p>
            </div>
            <div className={styles.category}>
              {datas.map(({ value }) => {
                return (
                  <button
                    style={{
                      color: activeComponent == value ? "#05B570" : "#667085",
                    }}
                    onClick={() => setActiveComponent(value)}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.topBlogs}>
          {topBlogs
            .slice(0, 1)
            .map(({ image, title, description, category }) => {
              return (
                <div className={styles.mainblog}>
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <CategoryDivContainer category={category} />
                </div>
              );
            })}
          <div className={styles.rightDiv}>
            {topBlogs
              .slice(1, 3)
              .map(({ image, title, description, category }) => {
                return (
                  <div>
                    <img src={image} alt="" />
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <CategoryDivContainer category={category} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.allBlogs}>
        <h1>All Blogs</h1>
        <div className={styles.blogWrapper}>
          {[...data]
            .reverse()
            .slice(0, count)
            .map(({ image, title, description, category }) => {
              return (
                <div className={styles.individualDiv}>
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <CategoryDivContainer category={category} />
                </div>
              );
            })}
        </div>
        {count >= data.length ? (
          <button onClick={handleCountBack}>Show Less</button>
        ) : (
          <button onClick={handleCount}>View More</button>
        )}
      </div>
      <div className={styles.bannerSection}>
        <div className={styles.LeftSection}>
          <h1>
            <p>Join us in</p>&nbsp;<span>rebuilding the future</span>
            <p>of Indian Education</p>
          </h1>
          <div className={styles.buttonandpara}>
            <p>
              Help us build resources, mentor aspirants and support our
              activities and events.
            </p>
            <button>
              <p>Join Us</p>
              <ArrowRight color="rgba(3, 72, 82, 1)" />
            </button>
          </div>
        </div>
        <img src={sound} alt="" />
      </div>
      <Footer />
    </div>
  );
};

interface CategoryDivContainerProps {
  category: string;
}
const CategoryDivContainer = ({ category }: CategoryDivContainerProps) => {
  return (
    <div className={styles.categoryDiv}>
      {category.split(",").map((cat: string) => {
        const normalizedCat = cat.trim().replace(/\s+/g, "");

        const className =
          styles[normalizedCat.toLowerCase()] || styles.defaultCategory;

        return (
          <p className={`${styles.contentCategory} ${className}`}>
            {cat.trim()}
          </p>
        );
      })}
    </div>
  );
};
