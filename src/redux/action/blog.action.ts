import { createAsyncThunk } from "@reduxjs/toolkit";
import BlogService from "../../service/blogs.services";

export const BlogListAction = createAsyncThunk("blogs/all", async (_, { rejectWithValue }) => {
     try {
          const data = await BlogService.BlogList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const BlogListByIdAction = createAsyncThunk("blogs/:id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await BlogService.BlogListById(props);
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});
