import { createAsyncThunk } from "@reduxjs/toolkit";

import mainCategoryService from "../../service/main-category.service";

const GetAllMainCategory = createAsyncThunk("mainCategory/all", async () => {
     const data = await mainCategoryService.GetMainCategory();
     return await data.data.data;
});

const GetMainCategoryById = createAsyncThunk("mainCategory/by-id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await mainCategoryService.GetMainCategoryById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               console.log(err.response.data.message);

               return rejectWithValue(err.response.data.message);
          } else {
               console.log(err.message);
               return rejectWithValue(err.response);
          }
     }
});

export { GetMainCategoryById, GetAllMainCategory };
