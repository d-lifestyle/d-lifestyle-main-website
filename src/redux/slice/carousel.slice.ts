import { createSlice } from "@reduxjs/toolkit";
import { CarouselProps, DataStateProps } from "../../interface";
import { ListCategoryByIdAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ListCarouselAction } from "../action/carousel.action";

const InitialState: DataStateProps<CarouselProps> = {
     data: [] as CarouselProps[],
     error: "",
     loading: false,
     single: {} as CarouselProps,
     success: "",
};

const CarouselSlice = createSlice({
     initialState: InitialState,
     name: "carousel",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(ListCarouselAction.fulfilled, (state, action) => {
                    state.data = action.payload.data;
                    state.loading = false;
               })
               .addCase(ListCarouselAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListCarouselAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
          builder
               .addCase(ListCategoryByIdAction.fulfilled, (state, action) => {
                    state.single = action.payload;
               })
               .addCase(ListCategoryByIdAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListCategoryByIdAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const CarouselReducer = CarouselSlice.reducer;
export const useCarouselSelector = () =>
     useSelector((state: RootState) => {
          return state.carousel;
     });
