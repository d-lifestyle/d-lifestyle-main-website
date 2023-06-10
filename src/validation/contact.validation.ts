import * as yup from "yup";
import { ContactFormProps } from "../interface";

export interface EnquiryFormProps {
     dataId: any;
     checkIn: string;
     checkOut: string;
     fullName: string;
     email: string;
     phone: string;
     body?: string;
     favorite?: boolean;
     _id?: string;
     createdAt?: string;
     updatedAt?: string;
}

export interface NewEnquiryFormProps {
     name: string;
     email: string;
     phone: string;
     body: string;
}

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

export const InitialContactForm: ContactFormProps = {
     email: "",
     name: "",
     phone: "",
     body: "",
};

export const ContactFormSchema = yup.object().shape({
     name: yup.string().required("your full name is required"),
     email: yup.string().required("your email is required"),
     phone: yup.string().required("your contact number is required"),
     placeToVisit: yup.string().required("place visits is required"),
     body: yup.string(),
});
