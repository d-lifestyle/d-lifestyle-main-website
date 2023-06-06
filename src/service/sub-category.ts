import axios from "axios";

class SubCategoryServices {
  public async SubCategoryList() {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/sub-category`);
  }

  public async SubCategoryListById(id: string) {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/sub-categories/${id}`);
  }

  public async ListSubCategoriesByCategoryId(categoryId: string) {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/sub-category/category/${categoryId}`);
  }
}

const SubCategoryService = new SubCategoryServices();

export default SubCategoryService;
