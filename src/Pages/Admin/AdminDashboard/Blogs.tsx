import { useState, useEffect } from "react";
import { getBlogs } from "./Apis";
import styles from "./AdminDashboard.module.css";

type Props = {};

export const Blogs = (_props: Props) => {
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
    <div className={styles.allBlogs}>
      <div className={styles.header}>
        {" "}
        <h1>All Blogs</h1>
        <button>add</button>
      </div>

      <div className={styles.blogWrapper}>
        {[...data].reverse().slice(0,6).map(({ image, title, description, category }) => {
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
  );
};
