import { createSlice } from "@reduxjs/toolkit";
import { GetAllCarousel } from "../features/action";
import { useSelector } from "react-redux";
import { CarouselProps } from "../interface";

interface InitialMenuProps {
     loading: boolean;
     data: CarouselProps[];
     error: string;
     success: string;
}

const InitialCarouselState: InitialMenuProps = {
     loading: false,
     data: [],
     error: "",
     success: "",
};

const CarouselSlice = createSlice({
     name: "carousel",
     initialState: InitialCarouselState,
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(GetAllCarousel.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.loading = false;
               })
               .addCase(GetAllCarousel.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetAllCarousel.rejected, (state, action) => {
                    state.error = action.payload as string;
                    state.loading = false;
               });
     },
});

export const CarouselReducer = CarouselSlice.reducer;
// export const {} = CarouselSlice.actions
export const useCarouselSelector = () =>
     useSelector((state: any) => {
          return state.carousel;
     });
