import axios from "axios";
import { ContactFormProps, EnquiryFormProps } from "../interface";

class GeneralServices {
     public async ContactMe(props: ContactFormProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/contact-me`, {
               body: props.body,
               email: props.email,
               name: props.name,
               phone: props.phone,
               placeToVisit: props.placeToVisit,
          });
     }
     public async EnquirySend(props: EnquiryFormProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/enquiry`, { ...props });
     }
}

const GeneralService = new GeneralServices();

export default GeneralService;
