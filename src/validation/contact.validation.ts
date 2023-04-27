import * as yup from "yup";
import { ContactFormProps } from "../interface";

export const ContactInitialValidation: ContactFormProps = {
     email: "",
     message: "",
     name: "",
     phone: "",
     placeNeedToVisit: "",
};

export const ContactValidationSchema = yup.object().shape({
     email: yup.string().email(),
     message: yup.string().max(50),
     name: yup.string().required(),
     phone: yup.string().max(13).required("phone is required"),
     placeNeedToVisit: yup.string(),
});
