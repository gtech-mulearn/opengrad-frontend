import { supabase } from "../../../App";

export const getBlogs = async () => {
  let { data: blogs, error } = await supabase.from("blogs").select("*");
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return blogs;
  }
};

export const insertBlogs = async (formdata: any) => {
  const currentDateAndTime = new Date();

  // Get the individual components
  const year = currentDateAndTime.getFullYear();
  const month = currentDateAndTime.getMonth() + 1; // Months are zero-based, so add 1
  const day = currentDateAndTime.getDate();
  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const seconds = currentDateAndTime.getSeconds();

  // Create a formatted string
  const formattedDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // Adjust the data to comply with row-level security conditions
  const adjustedData = {
    title: formdata.title,
    created_at: formattedDateAndTime,
    image: formdata.image,
    description: formdata.description,
    category: formdata.categories,
  };

  const { data: blogs, error } = await supabase
    .from("blogs")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return blogs;
  }
};