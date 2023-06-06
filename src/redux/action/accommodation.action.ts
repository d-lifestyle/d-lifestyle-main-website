import { createAsyncThunk } from "@reduxjs/toolkit";
import AccommodationService from "../../service/accommodations";

export const ListAccommodationAction = createAsyncThunk("accommodation/all", async (_, { rejectWithValue }) => {
     try {
          const data = await AccommodationService.AccommodationList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const ListAccommodationByIdAction = createAsyncThunk(
     "accommodation/id",
     async (props: string, { rejectWithValue }) => {
          try {
               const data = await AccommodationService.AccommodationListById(props);
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
