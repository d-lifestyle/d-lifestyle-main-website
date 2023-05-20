import { createSlice } from "@reduxjs/toolkit";

import { useSelector } from "react-redux";
import { AccommodationProps } from "../../../interface";
import { RootState } from "../../../store/hooks";
import { GetAccommodationById, GetAllAccommodation } from "../../action";

interface InitialAccommodationProps {
     loading: boolean;
     data: AccommodationProps[];
     error?: string;
     success?: string;
     single: AccommodationProps | undefined;
}

const InitialAccommodationState: InitialAccommodationProps = {
     data: [],
     loading: false,
     single: undefined
};

const CarouselSlice = createSlice({
     name: "accommodation",
     initialState: InitialAccommodationState,
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(GetAllAccommodation.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.loading = false;
               })
               .addCase(GetAllAccommodation.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetAllAccommodation.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
          builder
               .addCase(GetAccommodationById.fulfilled, (state, action) => {
                    state.single = action.payload;
                    state.loading = false;
               })
               .addCase(GetAccommodationById.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetAccommodationById.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const AccommodationReducer = CarouselSlice.reducer;
// export const {} = CarouselSlice.actions
export const useAccommodationSelector = () =>
     useSelector((state: RootState) => {
          return state.accommodation;
     });
