import axios from "axios";

class RentalServices {
     public async RentalList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/rental`);
     }

     public async RentalListById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/rental/${id}`);
     }
}

const RentalService = new RentalServices();

export default RentalService;
