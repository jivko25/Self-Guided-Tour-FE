"use client";
import Btn from "../../Buttons/Btn";
import InputField from "../../InputField/InputField";
import ProfilePicture from "./ProfilePicture";
import { useEffect, useRef, useState } from "react";
import {
  updateProfileAsync,
  updatePasswordAsync,
  createPasswordAsync,
} from "@/app/actions/profilePageActions";
import { useProfile } from "@/app/context/profileContext";
import {
  emailValidationScheme,
  passwordValidationScheme,
} from "@/app/utils/validationSchemes";
import { usePopup } from "@/app/context/popupContext";
import { func } from "prop-types";

function ProfileForm() {
  const { getProfile, user, isLoading, dispatch, profilePictureSrc, error } =
    useProfile();
  const [change, setChange] = useState(false);

  const popup = usePopup();
  const profilePictureRef = useRef(null);

  //Set up the form validation

  const [profilePicture, setProfilePicture] = useState("");
  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image")) {
      alert("Please upload an image file");
      return;
    }
    setProfilePicture(file);

    dispatch({ type: "priflePictureSrc", payload: URL.createObjectURL(file) });
  }
  function triggerFileUpload() {
    profilePictureRef.current.click();
    setChange(true);
  }
  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();
    // Check if the user has made any changes
    if (!change) return;

    const formData = new FormData(e.target);
    const { password, repeatPassword, currentPassword } = user;
    // Validate the email
    const emailError = validateEmail(user?.email);
    if (emailError) {
      dispatch({ type: "error", payload: emailError });
      return;
    }
    if (handleOnlyCurrentPassword(password, repeatPassword, currentPassword)) {
      dispatch({
        type: "error",
        payload: { password: "Please enter a new password" },
      });
      return;
    }
    // Validate the password
    if (password) {
      const passwordError = validatePassword(
        password,
        repeatPassword,
        currentPassword
      );
      if (passwordError) {
        dispatch({ type: "error", payload: passwordError });
        return;
      }
      let response;
      if (user?.hasPassword) {
        if (!currentPassword) {
          dispatch({
            type: "error",
            payload: { currentPassword: "Please enter your current password" },
          });
          return;
        }
        response = await updatePasswordAsync(currentPassword, password);
      } else {
        response = await createPasswordAsync(password, repeatPassword);
      }
      if (response?.type === "ERROR") {
        popup({
          type: response?.type,
          message: response?.message,
        });
        return;
      }
    }
    // Update the user profile
    const response = await updateProfileAsync(formData);
    popup({
      type: response?.type,
      message: response?.message,
    });
    //Should reset the password fields.....
    dispatch({ type: "resetPasswords" });
    dispatch({ type: "clearError" });
  }
  //Handle onChange events
  function handleInputChange(e) {
    const { name, value } = e.target;
    setChange(true);
    dispatch({ type: "user/onChange", payload: { [name]: value } });
  }
  useEffect(() => {
    const { password, repeatPassword, currentPassword } = user;
    if (password === "") {
      dispatch({
        type: "error",
        payload: { password: "" },
      });
    }
    if (repeatPassword === "") {
      dispatch({
        type: "error",
        payload: { repeatPassword: "" },
      });
      if (currentPassword === "") {
        dispatch({
          type: "error",
          payload: { currentPassword: "" },
        });
      }
    }
  }, [user?.password, user?.repeatPassword, user?.currentPassword]);
  // Fetch the user profile when the component mounts
  useEffect(() => {
    async function fetchProfile() {
      await getProfile();
    }
    fetchProfile();
  }, [getProfile]);
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
      onSubmit={handleSubmit}
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
          onChange={handleInputChange}
        />
        <InputField
          label="Last Name (optional)"
          id="lastName"
          name="lastName"
          type="text"
          classes=" tablet:w-[439px]"
          value={user?.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-col tablet:flex-row gap-5 mb-6 tablet:mb-16">
        <InputField
          label="Email Addres"
          type="email"
          id="email"
          hasTooltip={user?.isExternalUser}
          content={"External users can't change their email address."}
          readOnly={user?.isExternalUser}
          value={user?.email}
          name="email"
          classes=" tablet:w-[430px] z-10"
          onChange={handleInputChange}
          error={error?.email}
        />
        <InputField
          label="Phone Number (optional)"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          classes=" tablet:w-[430px] z-11"
          value={user?.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-8 flex gap-0.5 flex-col">
        <label htmlFor="about">Something About Yourself (optional)</label>
        <textarea
          name="about"
          className="tablet:w-full  h-36 border border-[#CECECE] bg-transparent"
          style={{ resize: "none", textIndent: "10px" }}
          value={user?.about || ""}
          onChange={handleInputChange}
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
          className="w-48  "
          variant="transparent-outlined"
          onClick={triggerFileUpload}
        />
      </section>
      <section className=" border-t-2 border-[#D1D0D8] mt-16 mb-28">
        <h1 className="mt-16 text-xl">Sign In and Security</h1>
        {user?.hasPassword ? (
          <InputField
            label="Current Password"
            name="currentPassword"
            id="currentPassword"
            type="password"
            value={user?.currentPassword}
            onChange={handleInputChange}
            classes=" w-[430px] mt-8 web:mt-16"
            error={error?.currentPassword}
          />
        ) : (
          <h1 className="text-l mt-8 w-full ">
            It looks like you’re currently using an external login method
            (Google, Facebook, etc.) and don’t have a password set for your
            account. If you’d like, you can add a password for added security or
            for alternative login options.
          </h1>
        )}
        <div className="flex gap-8 mt-8 web:mt-16 smallPhone:flex-col tablet:flex-row">
          <InputField
            label="New Password"
            name="password"
            id="password"
            type="password"
            value={user?.password}
            onChange={handleInputChange}
            classes=" w-[430px]"
            error={error?.password}
          />
          <InputField
            id="repeatPassword"
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            value={user?.repeatPassword}
            onChange={handleInputChange}
            classes=" w-[430px]"
            error={error?.repeatPassword}
          />
        </div>

        <Btn
          type="submit"
          text="Save Changes"
          className={`${
            isLoading ? "animate-pulse" : ""
          } w-48 mt-10 web:mt-16 `}
          variant="filled"
        />
      </section>
    </form>
  );
}

export default ProfileForm;

function validatePassword(password, repeatPassword) {
  try {
    if (password) {
      passwordValidationScheme.validateSync(
        {
          password,
          repeatPassword,
        },
        { abortEarly: false }
      );
    }
  } catch (error) {
    const errors = error.inner.reduce((acc, err) => {
      acc[err.path] = err.message;
      return acc;
    }, {});
    return errors || null;
  }
}

function validateEmail(email) {
  try {
    emailValidationScheme.validateSync({ email });
  } catch (error) {
    //dispatch({ type: "error", payload: { [error.path]: error.message } });
    return { [error.path]: error.message } || null;
  }
}

function handleOnlyCurrentPassword(password, repeatPassword, currentPassword) {
  return currentPassword !== "" && password === "" && repeatPassword === "";
}
