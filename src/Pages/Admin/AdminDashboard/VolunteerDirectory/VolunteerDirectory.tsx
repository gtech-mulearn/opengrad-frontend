import { useEffect, useState } from "react";
import styles from "../AdminDashboard.module.css";

import { deleteVolunteerDirectory } from "../Apis";
import { VolunteerDirectoryForm } from "./VolunteerDirectoryForm";
import { getVolunteerDirectory } from "../../../Volunteer/Components/VolunteerDirectory/Api";

type Props = {};

export const VolunteerDirectory = (_props: Props) => {
   const [data, setData] = useState<any[]>([]);
   const [showAddForm, setShowAddForm] = useState(false);
   const handleFetchDetails = async () => {
     try {
       const response = await getVolunteerDirectory();
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
       const response = await deleteVolunteerDirectory(id);
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
           .map(({ id, description, name, image }) => {
             return (
               <div className={styles.IndividualSlider}>
                 <div className={styles.TextContent}>
                   <div>
                     <h3>{name}</h3>
                     <p>{description}</p>
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
       {showAddForm && <VolunteerDirectoryForm showAddForm={showAddForm} />}
     </div>
   );
};
