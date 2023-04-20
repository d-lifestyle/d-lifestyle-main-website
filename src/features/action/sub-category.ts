import { createAsyncThunk } from "@reduxjs/toolkit";
import subCategoryService from "../../service/sub-category.service";

const GetAllSubCategory = createAsyncThunk("subcategory/all", async () => {
     const data = await subCategoryService.GetSubCategory();
     return data.data.data;
});

const GetSubCategoryWithId = createAsyncThunk("subcategory/by-id", async (props: string) => {
     const data = await subCategoryService.GetSubCategoryById(props);
     return data.data.data;
});
const SubCategoryWithCategoryId = createAsyncThunk("subcategory/category", async (props: string) => {
     const data = await subCategoryService.GetSubCategoryWithCategoryId(props);
     console.log("sub category", await data.data.data);
     return await data.data.data;
});

export { GetAllSubCategory, GetSubCategoryWithId, SubCategoryWithCategoryId };
