import { createAsyncThunk } from "@reduxjs/toolkit";

import mainCategoryService from "../../service/main-category.service";

const GetAllMainCategory = createAsyncThunk("mainCategory/all", async () => {
     try {
          const data = await mainCategoryService.GetMainCategory();
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

const GetMainCategoryById = createAsyncThunk("mainCategory/by-id", async (props: string) => {
     try {
          const data = await mainCategoryService.GetMainCategoryById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

export { GetMainCategoryById, GetAllMainCategory };
