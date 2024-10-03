import ProfileForm from "@/app/components/Profile/ProfileForm/ProfileForm";
function MyProfile() {
  return (
    <div className="flex flex-col gap-12 mt-16">
      <h1 className=" text-xl font-medium">Personal Details</h1>
      <ProfileForm />
    </div>
  );
}

export default MyProfile;
