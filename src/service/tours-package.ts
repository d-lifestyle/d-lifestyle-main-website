import axios from "axios";

class ToursPackageServices {
     public async ToursPackageList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/tours-travel`);
     }

     public async ToursPackageListById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/tours-travel/${id}`);
     }
}

const ToursPackageService = new ToursPackageServices();

export default ToursPackageService;
