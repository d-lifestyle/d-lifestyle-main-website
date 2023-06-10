import { createSlice } from "@reduxjs/toolkit";
import { AccommodationProps, DataStateProps } from "../../interface";
import { ListAccommodationAction, ListAccommodationByIdAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const InitialState: DataStateProps<AccommodationProps> = {
     data: [] as AccommodationProps[],
     error: "",
     loading: false,
     single: {} as AccommodationProps,
     success: "",
};

const AccommodationSlice = createSlice({
     initialState: InitialState,
     name: "accommodation",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(ListAccommodationAction.fulfilled, (state, action) => {
                    state.data = action.payload.data;
                    state.loading = false;
               })
               .addCase(ListAccommodationAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListAccommodationAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
          builder
               .addCase(ListAccommodationByIdAction.fulfilled, (state, action) => {
                    state.single = action.payload.data;
               })
               .addCase(ListAccommodationByIdAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListAccommodationByIdAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const AccommodationReducer = AccommodationSlice.reducer;
export const useAccommodationSelector = () =>
     useSelector((state: RootState) => {
          return state.accommodation;
     });
