import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { CategoriesProps } from "../../interface";
import { GetAllCategory, GetCategoryById } from "../action";

interface InitialCategoryProps {
     loading: boolean;
     data: CategoriesProps[];
     error?: string;
     success?: string;
     single?: CategoriesProps;
     tours: any[];
     lifeStyle: any[];
}

const InitialCategoryState: InitialCategoryProps = {
     loading: false,
     data: [],
     lifeStyle: [],
     tours: [],
     error: "",
     success: "",
};

const CategorySlice = createSlice({
     name: "category",
     initialState: InitialCategoryState,
     reducers: {},
     extraReducers: ({ addCase }) => {
          addCase(GetAllCategory.fulfilled, (state, action) => {
               state.data = action.payload;
               state.loading = false;
          })
               .addCase(GetAllCategory.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetAllCategory.rejected, (state, action) => {
                    state.error = action.payload as string;
                    state.loading = false;
               })
               .addCase(GetCategoryById.fulfilled, (state, action) => {
                    state.single = action.payload;
                    state.loading = true;
               })
               .addCase(GetCategoryById.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetCategoryById.rejected, (state, action) => {
                    state.error = action.payload as string;
                    state.loading = false;
               });
     },
});

export const CategoryReducer = CategorySlice.reducer;
// export const { FilterAccommodation, FilterToursPackages } = CategorySlice.actions;
export const useCategorySelector = () =>
     useSelector((state: RootState) => {
          return state.category;
     });
