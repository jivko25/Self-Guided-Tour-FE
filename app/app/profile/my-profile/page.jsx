import ProfileForm from "@/app/components/Profile/ProfileForm/ProfileForm";
import { ProfileProvider } from "@/app/context/profileContext";
function MyProfile() {
  return (
    <ProfileProvider>
      <div className="flex flex-col gap-12 mt-16">
        <h1 className=" text-xl font-medium">Personal Details</h1>
        <ProfileForm />
      </div>
    </ProfileProvider>
  );
}

export default MyProfile;
