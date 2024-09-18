import * as yup from "yup";

const requiredMessage = (field) => `${field} is required`;

const passwordErrorMessage =
  "Password must contain at least 6 characters, one uppercase, one lowercase, one number and one special case character";
const paswordsDontMatchErrorMessage = "Passwords don't match";
const emailErrorMessage = "Please enter a valid email address";
const emailRegex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/;
const nameErrorMessage = "Name must contain at least 2 letters";
//Separate password validation in different regex, so we can show more specific error messages for what is missing
const passwordRequirements = [
  {
    regex: /[a-z]/,
    message: "one lowercase letter",
  },
  {
    regex: /[A-Z]/,
    message: "one uppercase letter",
  },
  {
    regex: /[0-9]/,
    message: "one number",
  },
  {
    regex: /[^a-zA-Z0-9]/,
    message: "one special character",
  },
  {
    regex: /.{6,}/,
    message: "and at least 6 characters",
  },
];
const passwordValidation = yup
  .string()
  .test("password-strength", "", function (value) {
    const { path, createError } = this;

    const missingRequirements = passwordRequirements
      .filter((req) => !req.regex.test(value))
      .map((req) => req.message);

    if (missingRequirements.length) {
      return createError({
        path,
        message: `Password must contain ${missingRequirements.join(", ")}`,
      });
    }

    return true;
  });
export const registerValidationScheme = yup.object({
  email: yup
    .string()
    .matches(emailRegex, emailErrorMessage)
    .required(requiredMessage("Email")),
  name: yup.string().min(2, nameErrorMessage).required(requiredMessage("Name")),
  password: passwordValidation,
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], paswordsDontMatchErrorMessage),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
});
export const emailValidationScheme = yup.object({
  email: yup
    .string()
    .matches(emailRegex, emailErrorMessage)
    .required(requiredMessage("Email")),
});
export const passwordValidationScheme = yup.object({
  Password: passwordValidation,
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], paswordsDontMatchErrorMessage),
});
