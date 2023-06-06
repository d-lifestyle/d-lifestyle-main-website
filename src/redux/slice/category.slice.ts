import { createSlice } from "@reduxjs/toolkit";
import { CategoriesProps, DataStateProps } from "../../interface";
import { ListCategoryAction, ListCategoryByIdAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const InitialState: DataStateProps<CategoriesProps> = {
     data: {} as CategoriesProps[],
     error: "",
     loading: false,
     single: {} as CategoriesProps,
     success: "",
};

const CategorySlice = createSlice({
     initialState: InitialState,
     name: "category",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(ListCategoryAction.fulfilled, (state, action) => {
                    state.data = action.payload.data;
                    state.loading = false;
               })
               .addCase(ListCategoryAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListCategoryAction.rejected, (state, action) => {
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

export const CategoryReducer = CategorySlice.reducer;
export const useCategorySelector = () =>
     useSelector((state: RootState) => {
          return state.category;
     });
