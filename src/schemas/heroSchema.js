import * as Yup from "yup";

export const heroSchema = Yup.object({
  heroCode: Yup.string()
    .required("Please enter the hero code")
    .matches(/^\[A-Z]{3}-\d{4}$/, "Hero code pattern must be ABC-1234"),
  email: Yup.string()
    .email("Invalid guild ID")
    .required("Please enter your guild ID"),
  password: Yup.string()
    .min(6, "Secret code must have at least 6 characters.")
    .required("Please enter secret code"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Code does not match").required("Please enter repeat code"),
  age: Yup.number().min(10, "Age must be more than 9").max(120, "Too old"),
  class: Yup.string().oneOf(["Warrior", "Mage", "Thief"], "Please select the specified class").required("Please select one of the classes"),
  terms: Yup.boolean().oneOf([true]).required("You must swear allegiance to the guild first")
});