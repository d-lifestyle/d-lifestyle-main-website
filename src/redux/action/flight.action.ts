import { createAsyncThunk } from "@reduxjs/toolkit";
import { FlightProps } from "../../interface";
import FlightService from "../../service/flight.service";

export const SendRequestForFlightAction = createAsyncThunk(
     "flight/new",
     async (props: FlightProps, { rejectWithValue }) => {
          try {
               const data = await FlightService.SendRequestForFlight(props);
               return data.data;
          } catch (err: any) {
               if (err.response) {
                    return rejectWithValue(err.response.data.message);
               } else {
                    return rejectWithValue(err.message);
               }
          }
     }
);
