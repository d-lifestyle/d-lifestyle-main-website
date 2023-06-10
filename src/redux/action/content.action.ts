import { createAsyncThunk } from "@reduxjs/toolkit";
import ContentService from "../../service/content.services";

export const GetAdminContentAction = createAsyncThunk("content", async (_, { rejectWithValue }) => {
     try {
          const data = await ContentService.GetAdminContent();
          return data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});
