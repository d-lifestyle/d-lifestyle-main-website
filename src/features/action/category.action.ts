import { createAsyncThunk } from "@reduxjs/toolkit";

import { NewCategoryProps, UpdateCategoryProps } from "../../interface";
import categoryService from "../../service/category.service";

const GetAllCategory = createAsyncThunk("menu/all", async () => {
     try {
          const data = await categoryService.GetCategory();
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

const GetCategoryById = createAsyncThunk("menu/by-id", async (props: string) => {
     try {
          const data = await categoryService.GetCategoryById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

const AddNewCategory = createAsyncThunk("menu/new", async (props: NewCategoryProps) => {
     try {
          const data = await categoryService.AddCategory({
               name: props.name,
          });
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

const UpdateCategoryById = createAsyncThunk("menu/update", async (props: UpdateCategoryProps) => {
     try {
          const data = await categoryService.UpdateCategoryById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

const DeleteCategoryById = createAsyncThunk("menu/delete", async (props: string) => {
     try {
          const data = await categoryService.DeleteCategoryById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return err.response.data.message;
          } else {
               return err.response;
          }
     }
});

export { GetCategoryById, GetAllCategory, AddNewCategory, UpdateCategoryById, DeleteCategoryById };
