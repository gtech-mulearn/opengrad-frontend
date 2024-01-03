
type Props = {}

export const AdminLogin = (_props: Props) => {
   const navigateToAdminDashboard = () => {
     window.location.href = "/admindashboard";
   };
  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <div>
          <p>Username</p>
          <input type="text" />
        </div>{" "}
        <div>
          <p>Password</p>
          <input type="password" />
        </div>
        <button>forgot password</button>
      </div>
      <div>
        <button onClick={navigateToAdminDashboard}>Login</button>
        <p>Lorem ipsum sitatibus inventore molestiae sit blanditiis quae.</p>
      </div>
    </div>
  );
}