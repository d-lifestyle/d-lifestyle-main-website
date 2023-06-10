import { createSlice } from "@reduxjs/toolkit";
import { InitialFlightValues } from "../../validation";
import { DataStateProps, FlightProps } from "../../interface";
import { SendRequestForFlightAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const InitialFlightState: DataStateProps<FlightProps> = {
     data: [] as FlightProps[],
     error: "",
     loading: false,
     single: {} as FlightProps,
     success: "",
     otherData: [],
};

const FlightSlice = createSlice({
     name: "flight",
     initialState: InitialFlightState,
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(SendRequestForFlightAction.fulfilled, (state, action) => {
                    state.success = action.payload.data;
               })
               .addCase(SendRequestForFlightAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(SendRequestForFlightAction.rejected, (state, action) => {
                    state.error = (action.payload as any).data as string;
               });
     },
});

export const FlightReducer = FlightSlice.reducer;
export const useFlightSelector = () =>
     useSelector((state: RootState) => {
          return state.flight;
     });
