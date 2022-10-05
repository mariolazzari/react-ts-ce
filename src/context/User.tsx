import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const { user, setUser } = useContext(UserContext);

  const onLogin = () => {
    setUser({ name: "Mario", email: "mario@mail.its" });
  };

  const onLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>

      <h2>User name: {user?.name}</h2>
      <h2>User mail: {user?.email}</h2>
    </div>
  );
};

export default User;
