import { Blogs } from "./Blogs";

type Props = {};

export const AdminDashboard = (_props: Props) => {
  return (
    <div>
      <h2>AdminDashboard</h2>
      <div>
        <button>Blogs</button>
        <button>Home - Testimonials</button>
        <button>Join Us - Testimonial</button>
      </div>
      <Blogs />
    </div>
  );
};
