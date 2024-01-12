import { supabase } from "../../../App";

  const currentDateAndTime = new Date();

  const year = currentDateAndTime.getFullYear();
  const month = currentDateAndTime.getMonth() + 1; 
  const day = currentDateAndTime.getDate();
  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const seconds = currentDateAndTime.getSeconds();

  const formattedDateAndTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

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



export const insertHomeTestimonials = async (formdata: any) => {

  const adjustedData = {
    name: formdata.name,
    created_at: formattedDateAndTime,
    designation: formdata.designation,

    image: formdata.image,
    description: formdata.description,
  };
  console.log(adjustedData);
  const { data: homeTestimonials, error } = await supabase
    .from("homeTestimonials")
    .insert([adjustedData])
    .select();

  if (error) {
    // Handle the error
    throw error;
  } else {
    return homeTestimonials;
  }
};


export const deleteTestimonials = async (id: string) => {
  let { data: homeTestimonials, error } = await supabase
    .from("homeTestimonials")
    .delete()
    .eq("id", id);
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return homeTestimonials;
  }
};
