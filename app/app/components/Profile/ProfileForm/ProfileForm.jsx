"use client";
import Btn from "../../Buttons/Btn";
import InputField from "../../InputField/InputField";
import ProfilePicture from "./ProfilePicture";
import { use, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { updateProfileAsync } from "@/app/actions/profileActions";
import { useProfile } from "@/app/context/profileContext";

function ProfileForm() {
  const { getProfile, user, isLoading, dispatch, profilePictureSrc } =
    useProfile();
  const profilePictureRef = useRef(null);
  const [formState, updateProfile] = useFormState(
    updateProfileAsync,
    undefined
  );
  const [profilePicture, setProfilePicture] = useState("");
  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file.type);
    if (!file.type.startsWith("image")) {
      alert("Please upload an image file");
      return;
    }
    setProfilePicture(file);

    dispatch({ type: "priflePictureSrc", payload: URL.createObjectURL(file) });
  }
  function triggerFileUpload() {
    profilePictureRef.current.click();
  }
  useEffect(() => {
    async function fetchProfile() {
      const response = await getProfile();
      console.log("profile", response);
    }
    fetchProfile();
  }, []);
  // Clean up the object URL when the component unmounts
  useEffect(() => {
    return () => {
      if (profilePictureSrc) {
        URL.revokeObjectURL(profilePictureSrc);
      }
    };
  }, [profilePictureSrc]);

  return (
    <form
      action={updateProfile}
      className=" w-[884px] text-l font-medium mb-11"
    >
      <div className="flex gap-5 mb-16">
        <InputField
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          classes=" w-[430px]"
          value={user?.firstName}
        />
        <InputField
          label="Last Name (optional)"
          id="lastName"
          name="lastName"
          type="text"
          classes=" w-[439px]"
          value={user?.lastName}
        />
      </div>
      <div className="flex gap-5 mb-16">
        <InputField
          label="Email Addres"
          type="email"
          name="email"
          id="email"
          classes=" w-[430px]"
          value={user?.email}
        />
        <InputField
          label="Phone Number (optional)"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          classes=" w-[439px]"
          value={user?.phoneNumber}
        />
      </div>
      <div className="mt-8 flex gap-0.5 flex-col">
        <label htmlFor="about">Something About Yourself (optional)</label>
        <textarea
          name="about"
          className="w-full  h-36 border border-[#CECECE] bg-transparent"
          style={{ resize: "none", textIndent: "10px" }}
          value={user?.about}
        ></textarea>
      </div>
      <section className="mt-16 flex flex-col gap-9">
        <main>
          <label htmlFor="profile">Profile Picture (optional)</label>
          <ProfilePicture src={profilePictureSrc} />
          <input
            type="file"
            id="profile"
            name="profilePicture"
            className="hidden"
            ref={profilePictureRef}
            onChange={handleFileUpload}
          />
        </main>
        <Btn
          type="button"
          text="Choose File"
          className="w-48  hover:bg-blue-950 hover:text-white hover:border-blue-800 transition-colors duration-500"
          variant="transparent-outlined"
          onClick={triggerFileUpload}
        />
      </section>
      <section className=" border-t-2 border-[#D1D0D8] mt-16">
        <h1 className="mt-16">Sign In and Security</h1>`
        <InputField
          label="Current Password"
          name="currentPassword"
          id="password"
          type="password"
          classes=" w-[430px]"
        />
        <div className="flex gap-8 mt-16">
          <InputField
            label="New Password"
            name="password"
            id="password"
            type="password"
            classes=" w-[430px]"
          />
          <InputField
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            classes=" w-[430px]"
          />
        </div>
        <Btn
          type="submit"
          text="Save Changes"
          className={`${
            isLoading ? "animate-pulse" : ""
          } w-48 mt-16 hover:bg-white hover:text-blue-950 hover:border-blue-800 transition-colors duration-500`}
          variant="filled"
        />
      </section>
    </form>
  );
}

export default ProfileForm;
