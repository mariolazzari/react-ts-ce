import Login from "./Login";
import { ProfileType } from "./Profile";

type PrivateType = {
  isLoggedIn: boolean;
  Component: React.FC<ProfileType>;
};

function Private({ isLoggedIn, Component }: PrivateType) {
  return (
    <div>
      {isLoggedIn && <Component name="Mario" />}
      {!isLoggedIn && <Login />}
    </div>
  );
}

export default Private;
