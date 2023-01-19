import * as Yup from "yup";

const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

export const signupSchema = Yup.object({
  delivery_address: Yup.string()
    .min(3)
    .required("Please enter your delivery address."),
  receiver_name: Yup.string()
    .min(3)
    .required("Please enter your receiver name."),
  contact: Yup.string().min(3).required("Please enter your contact."),
  alternative_contact: Yup.string()
    .min(3)
    .required("Please enter your alternative contact."),
  transaction_code: Yup.string()
    .min(3)
    .required("Please enter your transaction code."),
});
