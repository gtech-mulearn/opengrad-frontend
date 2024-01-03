import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ArrowRight } from "../../assets/svg";
import { getBlogs } from "./Api";
import styles from "./OurBlog.module.css";
import { useState, useEffect } from "react";

type Props = {};

export const OurBlog = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);

  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
        console.log(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);
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
              <button>News and Updates</button>
              <button>Events</button>
              <button>Campus Diaries</button>
              <button>Insights</button>
            </div>
          </div>
        </div>
        <div className={styles.topBlogs}>
          {data.slice(0, 1).map(({ image, title, description, category }) => {
            return (
              <div className={styles.mainblog}>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                  <p
                    className={
                      styles.newsAndUpdates + " " + styles.contentCategory
                    }
                  >
                    {category}
                  </p>
                </div>
              </div>
            );
          })}
          <div className={styles.rightDiv}>
            {data.slice(1, 3).map(({ image, title, description, category }) => {
              return (
                <div>
                  <img src={image} alt="" />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div>
                      <p
                        className={
                          styles.newsAndUpdates + " " + styles.contentCategory
                        }
                      >
                        {category}
                      </p>
                    </div>
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
            .map(({ image, title, description, category }) => {
              return (
                <div className={styles.individualDiv}>
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className={styles.categoryDiv}>
                    <p
                      className={
                        styles.newsAndUpdates + " " + styles.contentCategory
                      }
                    >
                      {category}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <button>View More</button>
      </div>
      <div>
        <div>
          <h1>
            <p>Join us in</p>&nbsp;<span>rebuilding the future</span>&nbsp;
            <p>of Indian Education</p>
          </h1>
          <p>
            Help us build resources, mentor aspirants and support our activities
            and events.
          </p>
          <button>
            <p>Join Us</p>
            <ArrowRight color="rgba(3, 72, 82, 1)" />
          </button>
        </div>
        <img src="" alt="" />
      </div>
      <Footer />
    </div>
  );
};
