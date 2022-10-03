import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const onLogin = () => {
    setUser({
      name: "Mario",
      email: "mario@mail.com",
    });
  };

  const onLogout = () => {
    setUser(null);
  };

  return (
    <>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
      <h2>User name: {user?.name}</h2>
      <h3>User name: {user?.email}</h3>
    </>
  );
};

export default User;
