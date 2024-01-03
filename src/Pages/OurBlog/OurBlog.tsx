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
    <div>
      <div>
        <h1>Our Blogs</h1>
      </div>
      <div>
        <div className={styles.TopInner}>
          <p>Our Blogs</p>
        </div>
        <div>
          <button>News and Updates</button>
          <button>Events</button>
          <button>Campus Diaries</button>
          <button>Insights</button>
        </div>
      </div>
      <div>
        <h1>All Blogs</h1>
        <div>
          {data.map(({ image, title, para, category }) => {
            return (
              <div>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{para}</p>
                <div>
                  <p>{category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
