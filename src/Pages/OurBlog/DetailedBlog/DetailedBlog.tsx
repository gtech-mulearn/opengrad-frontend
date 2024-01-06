import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedBlogs } from "../Api";

type Props = {};

export const DetailedBlog = (_props: Props) => {
  const { id } = useParams();
  const [data, setData] = useState<any[]>([]);

 const handleFetchDetails = async () => {
   if (typeof id === "string") {
     try {
       const response = await getDetailedBlogs(id);
       if (response) {
         setData(response);
       }
     } catch (error) {
       console.error(error);
     }
   } 
 };

  useEffect(() => {
    handleFetchDetails();
  }, []);
  return (
    <div>
      {data.map(({ image, title, description, category }) => (
        <div key={title}>
          {" "}
          {/* make sure to use a unique key here */}
          <img src={image} alt="" />
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};
