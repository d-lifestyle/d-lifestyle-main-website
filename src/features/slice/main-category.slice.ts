import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { MainCategoryProps } from "../../interface";
import { GetAllMainCategory, GetMainCategoryById } from "../action";

interface InitialMainCategoryProps {
     loading: boolean;
     data: MainCategoryProps[];
     error?: string;
     success?: string;
     single?: MainCategoryProps;
}

const InitialMainCategoryState: InitialMainCategoryProps = {
     loading: false,
     data: [],
};

const MainCategorySlice = createSlice({
     name: "mainCategory",
     initialState: InitialMainCategoryState,
     reducers: {},
     extraReducers: ({ addCase }) => {
          addCase(GetAllMainCategory.fulfilled, (state, action) => {
               state.data = action.payload;
          })
               .addCase(GetAllMainCategory.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetAllMainCategory.rejected, (state, action) => {
                    state.error = action.payload as string;
               })
               .addCase(GetMainCategoryById.fulfilled, (state, action) => {
                    state.single = action.payload;
               })
               .addCase(GetMainCategoryById.pending, (state) => {
                    state.loading = true;
               })
               .addCase(GetMainCategoryById.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const MainCategoryReducer = MainCategorySlice.reducer;
// export const {} = MenuSlice.actions
export const useMainCategorySelector = () =>
     useSelector((state: RootState) => {
          return state.mainCategory;
     });
