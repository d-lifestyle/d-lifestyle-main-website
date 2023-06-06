import { createAsyncThunk } from "@reduxjs/toolkit";
import CruiseService from "../../service/cruise.services";

export const ListCruiseAction = createAsyncThunk("cruise/all", async (_, { rejectWithValue }) => {
     try {
          const data = await CruiseService.CruiseList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const ListCruiseByIdAction = createAsyncThunk("cruise/id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await CruiseService.CruiseListById(props);
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});
