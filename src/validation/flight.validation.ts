import { object, string } from "yup";

export interface FlightProps {
     displayName: string;
     from: string;
     to: string;
     travelClass: string;
     adults: string;
     child?: string;
     infants?: string;
}

export const InitialFlightValues: FlightProps = {
     adults: "",
     from: "",
     to: "",
     travelClass: "",
     infants: "",
     child: "",
     displayName: "",
};

export const ValidationFlightSchema = object().shape({
     displayName: string().required("at least one adult is required"),
     adults: string().required("at least one adult is required"),
     from: string().required("enter place from"),
     to: string().required("enter place to"),
     travelClass: string().required("select date of travel class"),
     infants: string(),
     child: string(),
});
