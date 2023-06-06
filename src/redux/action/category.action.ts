import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../service/categories";

export const ListCategoryAction = createAsyncThunk("category/all", async (_, { rejectWithValue }) => {
  try {
    const data = await CategoryService.CategoryList();
    return await data.data;
  } catch (err: any) {
    if (err.response) {
      console.log(err.response.data.message)
      return rejectWithValue(err.response.data.message);
    } else {
      console.log(err.message)
      return rejectWithValue(err.message);
    }
  }
});

export const ListCategoryByIdAction = createAsyncThunk("category/id", async (props: string, { rejectWithValue }) => {
  try {
    const data = await CategoryService.CategoryListById(props);
    return await data.data;
  } catch (err: any) {
    if (err.response) {
      return rejectWithValue(err.response.data.message);
    } else {
      return rejectWithValue(err.message);
    }
  }
});
