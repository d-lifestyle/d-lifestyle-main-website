import axios from "axios";
import { NewCategoryProps, UpdateCategoryProps } from "../interface/";

class CategoryServices {
     public async GetCategory() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/categories`);
     }

     public async GetCategoryById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/categories/${id}`);
     }
     public async AddCategory({ name }: NewCategoryProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/categories`, { name });
     }

     public async UpdateCategoryById(props: UpdateCategoryProps) {
          return await axios.put(`${process.env.REACT_APP_BACKEND}/categories/${props.id}`, {
               name: props.data.name,
          });
     }

     public async DeleteCategoryById(id: string) {
          return await axios.delete(`${process.env.REACT_APP_BACKEND}/categories/${id}`);
     }
}

const CategoryService = new CategoryServices();

export default CategoryService;
