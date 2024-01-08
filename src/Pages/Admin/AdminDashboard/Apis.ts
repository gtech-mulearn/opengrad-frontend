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

  const year = currentDateAndTime.getFullYear();
  const month = currentDateAndTime.getMonth() + 1; 
  const day = currentDateAndTime.getDate();
  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const seconds = currentDateAndTime.getSeconds();

  const formattedDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  const adjustedData = {
    title: formdata.title,
    created_at: formattedDateAndTime,
    author: formdata.author,
    dateofblog: formdata.dateofblog,
    extra_images:formdata.extra_images,
    image: formdata.image,
    description: formdata.description,
    category: formdata.categories,
  };
  console.log(adjustedData);
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
