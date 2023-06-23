import axios from "axios";

class AccommodationServices {
     public async AccommodationList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/accommodation`);
     }

     public async AccommodationListById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/accommodation/${id}`);
     }

     public async FilterBySubCategoryId(categoryId: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/accommodation/category/${categoryId}`);
     }
}

const AccommodationService = new AccommodationServices();

export default AccommodationService;
