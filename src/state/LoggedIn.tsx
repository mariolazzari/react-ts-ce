import { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  };

  const onLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
      <h2>User is logged {isLoggedIn ? "In" : "Out"}</h2>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default LoggedIn;
