import axios from "axios";
import { NewAccommodationProps, UpdateAccommodationProps } from "../interface";

class AccommodationServices {
     public async GetAccommodation() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/accommodation`);
     }

     public async GetAccommodationById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/accommodation/${id}`);
     }
     public async AddAccommodation({ SubCategory, city, displayName, state }: NewAccommodationProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/accommodation`, {
               SubCategory,
               city,
               displayName,
               state,
          });
     }

     public async UpdateAccommodationById(props: UpdateAccommodationProps) {
          return await axios.put(`${process.env.REACT_APP_BACKEND}/accommodation/${props.id}`, {
               SubCategory: props.data.SubCategory,
               city: props.data.city,
               displayName: props.data.displayName,
               state: props.data.state,
          });
     }

     public async DeleteAccommodationById(id: string) {
          return await axios.delete(`${process.env.REACT_APP_BACKEND}/accommodation/${id}`);
     }
}

const AccommodationService = new AccommodationServices();

export default AccommodationService;
