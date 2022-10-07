export type ProfileType = {
  name: string;
};

function Profile({ name }: ProfileType) {
  return <div>Private Profile {name}</div>;
}

export default Profile;
