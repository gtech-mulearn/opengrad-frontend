import { supabase } from "../../../../App";

export const getVolunteerDirectory = async () => {
  let { data: volunteerDirectory, error } = await supabase
    .from("volunteerDirectory")
    .select("*");

  if (error) {
    // toast.error(error.message);
    throw error;
  } else {
    return volunteerDirectory;
  }
};
