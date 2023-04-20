import axios from "axios";

class MainCategoryServices {
     public async GetMainCategory() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/main-categories`);
     }

     public async GetMainCategoryById(id: string) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/main-categories/${id}`);
     }
}

const MainCategoryService = new MainCategoryServices();

export default MainCategoryService;
