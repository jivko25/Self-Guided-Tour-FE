"use client";
import Btn from "../../Buttons/Btn";
import InputField from "../../InputField/InputField";
import ProfilePicture from "./ProfilePicture";
import { use, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { updateProfileAsync } from "@/app/actions/profileActions";
import { useProfile } from "@/app/context/profileContext";
import { useForm as useFormValidation } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationScheme } from "@/app/utils/validationSchemes";

function ProfileForm() {
  const { getProfile, user, isLoading, dispatch, profilePictureSrc, error } =
    useProfile();

  const profilePictureRef = useRef(null);
  // Set up server action
  const [formState, updateProfile] = useFormState(
    updateProfileAsync,
    undefined
  );
  //Set up the form validation
  const {
    register,
    formState: { errors: validationErrors, isValid },
    watch,
  } = useFormValidation({
    resolver: yupResolver(registerValidationScheme),
    mode: "onChange",
  });
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
  //Handle validation errors
  useEffect(() => {
    if (formState?.error) {
      dispatch({ type: "error", payload: formState.error });
    }
    // Clear the error upon successful submission, form state is string only on succesfull submission
    if (typeof formState === "string") {
      dispatch({ type: "clearError" });
    }
    dispatch({ type: "loaded" });
  }, [error, formState]);
  // Fetch the user profile when the component mounts
  useEffect(() => {
    if (error) return;
    async function fetchProfile() {
      await getProfile();
    }
    fetchProfile();
  }, [getProfile, error]);
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
      className=" tablet:w-[884px] text-l font-medium mb-11"
      noValidate
    >
      <div className="flex flex-col tablet:flex-row gap-5 mb-6 tablet:mb-16">
        <InputField
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          classes=" tablet:w-[430px]"
          value={user?.firstName}
        />
        <InputField
          label="Last Name (optional)"
          id="lastName"
          name="lastName"
          type="text"
          classes=" tablet:w-[439px]"
          value={user?.lastName}
        />
      </div>
      <div className="flex flex-col tablet:flex-row gap-5 mb-6 tablet:mb-16">
        <InputField
          label="Email Addres"
          type="email"
          id="email"
          hasTooltip={true}
          content={"External users can't change their email address."}
          readOnly={!user?.hasPassword}
          value={user?.email}
          name="email"
          classes=" tablet:w-[430px] z-10"
          error={error?.email}
        />
        <InputField
          label="Phone Number (optional)"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          classes=" tablet:w-[430px] z-11"
          value={user?.phoneNumber}
        />
        <input type="hidden" name="hasPassword" value={user?.hasPassword} />
      </div>
      <div className="mt-8 flex gap-0.5 flex-col">
        <label htmlFor="about">Something About Yourself (optional)</label>
        <textarea
          name="about"
          className="tablet:w-full  h-36 border border-[#CECECE] bg-transparent"
          style={{ resize: "none", textIndent: "10px" }}
          defaultValue={user?.about}
        ></textarea>
      </div>
      <section
        className="mt-16 flex gap-9 
      flex-col 
       "
      >
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
      <section className=" border-t-2 border-[#D1D0D8] mt-16  mb-16">
        <h1 className="mt-16 text-xl">Sign In and Security</h1>
        {user?.hasPassword ? (
          <InputField
            label="Current Password"
            name="currentPassword"
            id="currentPassword"
            type="password"
            classes=" w-[430px] mt-16"
          />
        ) : (
          <h1 className="text-l mt-8 w-full ">
            It looks like you’re currently using an external login method
            (Google, Facebook, etc.) and don’t have a password set for your
            account. If you’d like, you can add a password for added security or
            for alternative login options.
          </h1>
        )}
        <div className="flex gap-8 mt-16 smallPhone:flex-col tablet:flex-row">
          <InputField
            label="New Password"
            name="password"
            id="password"
            type="password"
            classes=" w-[430px]"
            {...register("password")}
            error={
              validationErrors.password?.message ||
              validationErrors.repeatPassword?.message
            }
          />
          <InputField
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            classes=" w-[430px]"
            {...register("repeatPassword")}
            error={
              validationErrors.repeatPassword?.message ||
              validationErrors.password?.message
            }
          />
        </div>
        <Btn
          type="submit"
          text="Save Changes"
          onClick={() => dispatch({ type: "loading" })}
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
