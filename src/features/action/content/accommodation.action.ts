import { createAsyncThunk } from "@reduxjs/toolkit";
import accommodationService from "../../../service/accommodation.server";

const GetAllAccommodation = createAsyncThunk("accommodation/all", async () => {
     const data = await accommodationService.GetAccommodation();
     return data.data.data;
});

const GetAccommodationById = createAsyncThunk("accommodation/by-id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await accommodationService.GetAccommodationById(props);
          return await data.data.data;
     } catch (err: any) {
          if (err.response) {
               rejectWithValue(err.response.data.message);
          } else {
               rejectWithValue(err.message);
          }
     }
});

export { GetAccommodationById, GetAllAccommodation };
