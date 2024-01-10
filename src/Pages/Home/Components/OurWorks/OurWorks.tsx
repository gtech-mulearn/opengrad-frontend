import { useEffect, useState } from "react";
import { SectionHeading } from "../../../../Components/SectionHeading/SectionHeading";
import { getBlogs } from "../../../OurBlog/Api";
import styles from "./OurWorks.module.css";

import { useNavigate } from "react-router-dom";

type Props = {
  id:string;
  image: string;
  par: string;
};

export const OurWorks = () => {
  const [data, setData] = useState<any[]>([]);
  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);
  return (
    <div className={styles.OurWorkWrapper}>
      {" "}
      <SectionHeading title="News and updates" />
      <div className={styles.WorksWrapper}>
        {[...data]
          .reverse()
          .slice(0, 6)
          .map(({ id, image, title }) => {
            return <Container id={id} image={image} par={title} />;
          })}
        
      </div>
    </div>
  );
};

const Container = ({id, image, par }: Props) => {
  const navigate = useNavigate();
  const detailBlogs = (id: any) => {
    console.log(id);
    navigate(`/detailedblog/${id}`);
    window.location.reload();
  };
  return (
    <div className={styles.Container} onClick={() => detailBlogs(id)}>
      <img src={image} alt="" />
      <div className={styles.InnerDiv}>
        <p>{par}</p>
      </div>
    </div>
  );
};
