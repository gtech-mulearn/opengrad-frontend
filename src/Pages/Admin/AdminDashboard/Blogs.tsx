import { useState, useEffect } from "react";
import { getBlogs } from "./Apis";

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
    <div>
      <div>
        <h2>Blogs</h2>
        <button>add</button>
      </div>
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
  );
};
