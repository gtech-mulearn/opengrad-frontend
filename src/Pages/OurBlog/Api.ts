import { supabase } from "../../App";

export const getBlogs = async () => {
  let { data: blogs, error } = await supabase.from("blogs").select("*");
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return blogs;
  }
};


export const getDetailedBlogs = async (id: string) => {
  let { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    // Filters
    .eq("id", id);
  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return blogs;
  }
};
