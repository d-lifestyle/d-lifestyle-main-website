import axios from "axios";
import { NewSubCategoryProps, UpdateSubCategoryProps } from "../interface/sub-category.interface";

class SubCategoryServices {
     public async GetSubCategory() {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/sub-category`);
     }

     public async GetSubCategoryById(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/sub-category/${id}`);
     }
     public async AddSubCategory({ CategoryId, name }: NewSubCategoryProps) {
          return await axios.post(`${process.env.REACT_APP_BACKEND}/sub-category`, { CategoryId, name });
     }

     public async UpdateSubCategoryById(props: UpdateSubCategoryProps) {
          return await axios.put(`${process.env.REACT_APP_BACKEND}/sub-category/${props.id}`, {
               CategoryId: props.data.CategoryId,
               name: props.data.name,
          });
     }

     public async DeleteSubCategoryById(id: string) {
          return await axios.delete(`${process.env.REACT_APP_BACKEND}/sub-category/${id}`);
     }

     // * Get sub category by category id
     public async GetSubCategoryWithCategoryId(id: string) {
          return await axios.get(`${process.env.REACT_APP_BACKEND}/sub-category/category/${id}`);
     }
}

const SubCategoryService = new SubCategoryServices();

export default SubCategoryService;
