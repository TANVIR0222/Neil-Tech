import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .trim()
    .required("Password is required"),
});

//  Yup validation schema
export const registerValidationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  checkbox: Yup.boolean().oneOf([true], "You must accept terms"),
});

export const businessInfoValidationSchema = Yup.object().shape({
  business_name: Yup.string().required("Business name is required"),
  business_phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  business_address: Yup.string().required("Address is required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
});
export const employeeLoginValidationsSchema = Yup.object().shape({
  phone_number: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number") // optional +, 10-15 digits
    .required("Phone number is required"),
});

export const createNewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const changePasswordalidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(6, "Password must be at least 6 characters"),

  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});
