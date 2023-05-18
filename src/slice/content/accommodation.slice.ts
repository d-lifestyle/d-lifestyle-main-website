import { createSlice } from "@reduxjs/toolkit";

import { useSelector } from "react-redux";
import { GetAccommodationById, GetAllAccommodation } from "../../features/action";
import { AccommodationProps } from "../../interface";
import { RootState } from "../../features";

interface InitialAccommodationProps {
     loading: boolean;
     data: AccommodationProps[];
     error: string;
     // success?: string;
     single: any;
}

// const InitialAccommodationState: InitialAccommodationProps = {

// };

const CarouselSlice = createSlice({
     name: "accommodation",
     initialState: {
          loading: false,
          data: [],
          single: {
               _id: "0",
               city: "",
               description: "",
               displayName: "",
               image: [{ image: "", title: "" }],
               state: "",
               SubCategory: "",
          },
          error: "",
          success: "",
     },
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
