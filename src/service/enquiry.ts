import axios from "axios";
import { EnquiryFormProps } from "../interface";

class EnquiryServices {
     public async MakeEnquiry({ checkIn, checkOut, dataId, email, fullName, phone, body }: EnquiryFormProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/enquiry`, {
               checkIn,
               checkOut,
               dataId,
               email,
               fullName,
               phone,
               body,
          });
     }
}

const EnquiryService = new EnquiryServices();

export default EnquiryService;
