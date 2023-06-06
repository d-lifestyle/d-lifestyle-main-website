import axios from "axios";
import { ContactFormProps } from "../interface";

class ContactServices {
     public async MakeContact({ email, name, phone, body, placeToVisit, favorite }: ContactFormProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/contact-me`, {
               email,
               name,
               phone,
               body,
               placeToVisit,
               favorite,
          });
     }
}

const ContactService = new ContactServices();

export default ContactService;
