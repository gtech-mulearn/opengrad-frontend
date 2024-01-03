import { supabase } from "../../../App";

export const loginUser = async (data1: any) => {
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: data1.usernameOrEmail,
      password: data1.password,
    });
    if (error) {
      // toast.error(error.message);
    } else {
      localStorage.setItem("accessToken", data.session?.access_token as string);
      localStorage.setItem("userId", data.user?.id as string);
      return data;
    }
  } catch (error) {
    console.error("Registration API error:", error);
    throw error;
  }
};
