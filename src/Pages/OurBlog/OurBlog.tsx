import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
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
        <div>
          {data.slice(0, 1).map(({ image, title, description, category }) => {
            return (
              <div>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                  <p>{category}</p>
                </div>
              </div>
            );
          })}
          <div>
            {data.slice(1, 3).map(({ image, title, description, category }) => {
              return (
                <div>
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div>
                    <p>{category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h1>All Blogs</h1>
        <div>
          {data.map(({ image, title, description, category }) => {
            return (
              <div>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                  <p>{category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
