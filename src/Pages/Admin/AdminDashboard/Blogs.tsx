import { useState, useEffect, ChangeEvent } from "react";
import { getBlogs, insertBlogs } from "./Apis";
import styles from "./AdminDashboard.module.css";
import { CategoryDivContainer } from "../../OurBlog/OurBlog";

type Props = {};

export const Blogs = (_props: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [insertdata, setInsertData] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    categories: "",
  });
  const [count, setCount] = useState(6);

  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  const handleAddButtonClick = () => {
    setShowAddForm(true);
  };

  const handleViewMoreClick = () => {
    setCount(count + 3);
  };
  const handleCountBack = () => {
    setCount(6);
  };

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
  // const handleCategoriesChange = (selectedCategories: string[]) => {
  //   const categoriesString = selectedCategories.join(", ");

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     categories: categoriesString,
  //   }));
  //   console.log(categoriesString);
  // };

  const handleCategoryCheckboxChange = (category: string) => {
    setFormData((prevData) => {
      const updatedCategories = prevData.categories.includes(category)
        ? prevData.categories
            .split(", ")
            .filter((c) => c !== category)
            .join(", ")
        : prevData.categories
        ? `${prevData.categories}, ${category}`
        : category;
      return {
        ...prevData,
        categories: updatedCategories,
      };
    });
  };

  const handleAddFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement logic to submit the form data (formData)
    // Send the data to your API or perform necessary actions
    console.log(formData);
    // Reset the form and close the modal
    setFormData({
      title: "",
      image: "",
      description: "",
      categories: "",
    });
    try {
      const response = await insertBlogs(formData);
      if (response) {
        setInsertData(response);
        console.log(insertdata);
      }
    } catch (error) {
      console.log(error);
    }
    setShowAddForm(false);
  };

  return (
    <div className={styles.allBlogs}>
      <div className={styles.header}>
        <h1>All Blogs</h1>
        <button onClick={handleAddButtonClick}>Add</button>
      </div>

      <div className={styles.blogWrapper}>
        {[...data]
          .reverse()
          .slice(0, count)
          .map(({ image, title, description, category }) => {
            return (
              <div key={title} className={styles.individualDiv}>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <CategoryDivContainer category={category} />
              </div>
            );
          })}
      </div>

      {count >= data.length ? (
        <button onClick={handleCountBack}>Show Less</button>
      ) : (
        <button onClick={handleViewMoreClick}>View More</button>
      )}

      {/* Add Form Modal */}
      {showAddForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.addForm}>
            <h2>Add Blog</h2>
            <form onSubmit={handleAddFormSubmit}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Image Link:</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={formData.image}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleTextareaChange}
                  required
                />
              </div>
              {/* <div>
                <label>Categories:</label>
             
                <select
                  multiple
                  value={formData.categories.split(", ")} 
                  onChange={(e) =>
                    handleCategoriesChange(
                      Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      )
                    )
                  }
                  required
                >
                  <option value="News and Updates">News and Updates</option>
                  <option value="Events">Events</option>
                  <option value="Campus Diaries">Campus Diaries</option>
                  <option value="Insights">Insights</option>
                </select>
              </div> */}

              <div>
                <label>Categories:</label>
                {/* Implement logic for category selection using checkboxes */}
                {/* Example: */}
                <div>
                  <input
                    type="checkbox"
                    id="newsUpdates"
                    value="News and Updates"
                    checked={formData.categories.includes("News and Updates")}
                    onChange={() =>
                      handleCategoryCheckboxChange("News and Updates")
                    }
                  />
                  <label htmlFor="newsUpdates">News and Updates</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="events"
                    value="Events"
                    checked={formData.categories.includes("Events")}
                    onChange={() => handleCategoryCheckboxChange("Events")}
                  />
                  <label htmlFor="events">Events</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="campusDiaries"
                    value="Campus Diaries"
                    checked={formData.categories.includes("Campus Diaries")}
                    onChange={() =>
                      handleCategoryCheckboxChange("Campus Diaries")
                    }
                  />
                  <label htmlFor="campusDiaries">Campus Diaries</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="insights"
                    value="Insights"
                    checked={formData.categories.includes("Insights")}
                    onChange={() => handleCategoryCheckboxChange("Insights")}
                  />
                  <label htmlFor="insights">Insights</label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
