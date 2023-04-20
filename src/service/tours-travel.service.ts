import axios from "axios";
import { NewToursTravelProps, UpdateToursTravelProps } from "../interface";

class ToursTravelServices {
     public async GetToursTravel() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/tours-travel`);
     }

     public async GetToursTravelById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/tours-travel/${id}`);
     }
     public async AddToursTravel({ SubCategory, code, displayName, duration, place, theme }: NewToursTravelProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/tours-travel`, {
               SubCategory,
               code,
               displayName,
               duration,
               place,
               theme,
          });
     }

     public async UpdateToursTravelById(props: UpdateToursTravelProps) {
          return await axios.put(`${process.env.REACT_APP_BACKEND}/tours-travel/${props.id}`, {
               SubCategory: props.data.SubCategory,
               code: props.data.code,
               displayName: props.data.displayName,
               duration: props.data.duration,
               place: props.data.place,
               theme: props.data.theme,
          });
     }

     public async DeleteToursTravelById(id: string) {
          return await axios.delete(`${process.env.REACT_APP_BACKEND}/tours-travel/${id}`);
     }
}

const ToursTravelService = new ToursTravelServices();

export default ToursTravelService;
