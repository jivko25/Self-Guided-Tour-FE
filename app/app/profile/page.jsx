import { ProfileProvider } from "../context/profileContext";

function Profile() {
  return (
    <ProfileProvider>
      <div>
        <h1>Profile Page</h1>
      </div>
    </ProfileProvider>
  );
}

export default Profile;
