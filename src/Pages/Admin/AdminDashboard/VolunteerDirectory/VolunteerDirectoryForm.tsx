import {  insertVolunteerDirectory } from "../Apis";
import styles from "../Form.module.css";
import { useState, ChangeEvent } from "react";

type Props = {
  showAddForm: boolean;
};

export const VolunteerDirectoryForm = (showAddForm: Props) => {
  const [insertdata, setInsertData] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    description: "",
    name: "",
    image: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      description: "",
      name: "",
      image: "",
    });
    try {
      const response = await insertVolunteerDirectory(formData);
      if (response) {
        setInsertData(response);
        console.log(insertdata);
      }
    } catch (error) {
      console.log(error);
    }

    window.location.reload();
  };

  const handleAddButtonClick = () => {
    console.log(showAddForm);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.addForm}>
        <h2>Add Blog</h2>
        <form onSubmit={handleAddFormSubmit}>
          <div>
            <label>Name :</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>{" "}
        
          <div>
            <label>Image Link :</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleInputChange}
              required
            />
          </div>{" "}
          <div>
            <label>Description :</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleTextareaChange}
              required
            />
          </div>
          <span className={styles.buttonWrappers}>
            <button style={{ backgroundColor: "green" }} type="submit">
              Submit
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleAddButtonClick}
            >
              Close
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
