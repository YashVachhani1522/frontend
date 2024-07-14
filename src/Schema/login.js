import * as Yup from "yup";


export const logiValidationSchema = Yup.object({
    email: Yup.string().email("Email is invalid!").required("Email Required!"),
    password: Yup.string()
      .min(8, "Password must be minimum 8 digits!")
      .required("Password Required!"),
  });