import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailedBlogs } from "../Api";
import styles from "./DetailedBlog.module.css";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";
import { BannerOFBlog, CategoryDivContainer } from "../OurBlog";

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
  const formatDate = (inputDate: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const formattedDate = new Date(inputDate).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className={styles.Wrapper}>
      <Navbar />
      {data.map(
        ({ image, title, author, dateofblog, description, category }) => {
          const formattedDate = formatDate(dateofblog);
          return (
            <div className={styles.HeaderWrapper}>
              <p className={styles.author}>
                Posted on {formattedDate} • <span>{author}</span>
              </p>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{description}</p>
              <CategoryDivContainer category={category} />
            </div>
          );
        }
      )}
      <BannerOFBlog />
      <Footer />
    </div>
  );
};
