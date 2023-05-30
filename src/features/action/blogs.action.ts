import { createAsyncThunk } from "@reduxjs/toolkit";
import BlogService from "../../service/blog.service";
import { BlogProps, UpdateBlogProps } from "../../interface";

export const BlogListAction = createAsyncThunk("blog/all", async (_, { rejectWithValue }) => {
     try {
          const data = await BlogService.GetBlog();
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const BlogListByIdAction = createAsyncThunk("blog/id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await BlogService.GetBlogById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const RegisterBlogAction = createAsyncThunk("blog/new", async (props: BlogProps, { rejectWithValue }) => {
     try {
          const data = await BlogService.AddBlog(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const UpdateBlogByIdAction = createAsyncThunk(
     "blog/update",
     async (props: UpdateBlogProps, { rejectWithValue }) => {
          try {
               const data = await BlogService.UpdateBlogById(props);
               return await data.data.data;
          } catch (err: any) {
               if (err.response) {
                    return rejectWithValue(err.response.data.message);
               } else {
                    return rejectWithValue(err.message);
               }
          }
     }
);

export const DeleteBlogByIdAction = createAsyncThunk("blog/delete", async (props: string, { rejectWithValue }) => {
     try {
          const data = await BlogService.DeleteBlogById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});
