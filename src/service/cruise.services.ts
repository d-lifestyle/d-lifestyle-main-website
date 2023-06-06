import axios from "axios";

class CruiseServices {
     public async CruiseList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/cruise`);
     }

     public async CruiseListById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/cruise/${id}`);
     }
}

const CruiseService = new CruiseServices();

export default CruiseService;
