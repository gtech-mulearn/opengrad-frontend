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
  const datas = [
    {
      name: "News and Updates",
    },
    {
      name: "Events",
    },
    {
      name: "Campus Diaries",
    },
    {
      name: "Insights",
    },
  ];
  const handleFetchDetails = async () => {
    try {
      const response = await getBlogs();
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchDetails();
  }, []);

  const handleAddButtonClick = () => {
    setShowAddForm(!showAddForm);
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

    console.log(formData);
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
                <p>
                  {description.length > 200
                    ? `${description.slice(0, 200)}...`
                    : description}
                </p>
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

              <div className={styles.cateoriessection}>
                <label>Categories:</label>{" "}
                <div>
                  {datas.map(({ name }) => {
                    return (
                      <div className={styles.innercheckbox}>
                        <input
                          type="checkbox"
                          id={name}
                          value={name}
                          checked={formData.categories.includes(name)}
                          onChange={() => handleCategoryCheckboxChange(name)}
                        />
                        <label htmlFor={name}>{name}</label>
                      </div>
                    );
                  })}
                </div>
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
      )}
    </div>
  );
};
