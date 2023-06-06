import { createAsyncThunk } from "@reduxjs/toolkit";
import SubCategoryService from "../../service/sub-category";

export const ListSubCategoryAction = createAsyncThunk("sub_category/all", async (_, { rejectWithValue }) => {
     try {
          const data = await SubCategoryService.SubCategoryList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const ListSubCategoryByIdAction = createAsyncThunk(
     "sub_category/id",
     async (props: string, { rejectWithValue }) => {
          try {
               const data = await SubCategoryService.SubCategoryListById(props);
               return await data.data;
          } catch (err: any) {
               if (err.response) {
                    return rejectWithValue(err.response.data.message);
               } else {
                    return rejectWithValue(err.message);
               }
          }
     }
);

export const ListSubCategoryByCategoryIdAction = createAsyncThunk(
     "sub_category/categoryData",
     async (categoryId: string, { rejectWithValue }) => {
          try {
               const data = await SubCategoryService.ListSubCategoriesByCategoryId(categoryId);
               return await data.data;
          } catch (err: any) {
               if (err.response) {
                    return rejectWithValue(err.response.data.message);
               } else {
                    return rejectWithValue(err.message);
               }
          }
     }
);
