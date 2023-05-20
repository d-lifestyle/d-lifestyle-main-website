import * as yup from "yup";
import { ContactFormProps, NewEnquiryFormProps } from "../interface";

export const ContactInitialValidation: ContactFormProps = {
     email: "",
     body: "",
     name: "",
     phone: "",
     placeToVisit: "",
};

export const ContactValidationSchema = yup.object().shape({
     email: yup.string().email().required("email is required"),
     body: yup.string(),
     message: yup.string().max(50),
     name: yup.string().required(),
     phone: yup.string().max(13).required("phone is required"),
     placeNeedToVisit: yup.string(),
});

export const EnquiryInitial: NewEnquiryFormProps = {
     body: "",
     email: "",
     name: "",
     phone: "",
};

export const EnquirySchema = yup.object().shape({
     body: yup.string(),
     email: yup.string().email().required("email is required"),
     name: yup.string().required("your full name is required"),
     phone: yup.string().required("your contact number is required"),
});
