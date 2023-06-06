import { createAsyncThunk } from "@reduxjs/toolkit";
import RentalService from "../../service/rental";

export const ListRentalAction = createAsyncThunk("rental/all", async (_, { rejectWithValue }) => {
     try {
          const data = await RentalService.RentalList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const ListRentalByIdAction = createAsyncThunk("rental/id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await RentalService.RentalListById(props);
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});
