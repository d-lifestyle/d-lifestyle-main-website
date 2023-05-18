import { createAsyncThunk } from "@reduxjs/toolkit";
import toursTravelService from "../../../service/tours-travel.service";

const GetAllToursTravel = createAsyncThunk("toursTravel/all", async () => {
     const data = await toursTravelService.GetToursTravel();
     return data.data.data;
});

const GetToursTravelById = createAsyncThunk("toursTravel/by-id", async (props: string, { rejectWithValue }) => {
     try {
          const data = await toursTravelService.GetToursTravelById(props);
          return data.data.data;
     } catch (err: any) {
          if (err.response) {
               rejectWithValue(err.response.data.message);
          } else {
               rejectWithValue(err.message);
          }
     }
});

export { GetToursTravelById, GetAllToursTravel };
