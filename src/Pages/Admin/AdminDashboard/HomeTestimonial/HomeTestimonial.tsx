import { useEffect, useState } from "react";
import styles from "../AdminDashboard.module.css";
import { getTestimonial } from "../../../Home/Components/OurStory/Api";
import { HomeTestimonialForm } from "./HomeTestimonialForm";
import { deleteTestimonials } from "../Apis";

type Props = {};

export const HomeTestimonial = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const handleFetchDetails = async () => {
    try {
      const response = await getTestimonial();
      if (response) {
        setData(response);
        // console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);
  const handleAddButtonClick = () => {
    setShowAddForm(!showAddForm);
  };

  const handleDeleteDetails = async (id: any) => {
    try {
      const response = await deleteTestimonials(id);
      if (response) {
        console.log(response);
      }
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.HomeTestimonial}>
      <div className={styles.header}>
        <h1>Testimonials</h1>
        <button onClick={handleAddButtonClick}>Add</button>
      </div>
      <div className={styles.testimonialsWrap}>
        {[...data]
          .reverse()
          .map(({ id, description, name, designation, image }) => {
            return (
              <div className={styles.IndividualSlider}>
                <p>{description}</p>{" "}
                <div className={styles.TextContent}>
                  <div>
                    <h3>{name}</h3>
                    <p>{designation}</p>
                  </div>

                  <img src={image} alt="" />
                </div>
                <div className={styles.buttonSection}>
                  <button>Update</button>
                  <button onClick={() => handleDeleteDetails(id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {showAddForm && <HomeTestimonialForm showAddForm={showAddForm} />}
    </div>
  );
};
