import * as yup from "yup";

export const emailSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email address is required")
      .email("Please provide a valid e-mail address")
  });