import axios from "axios";

class CategoryServices {
     public async CategoryList() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/categories`);
     }

     public async CategoryListById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/categories/${id}`);
     }
}

const CategoryService = new CategoryServices();

export default CategoryService;
