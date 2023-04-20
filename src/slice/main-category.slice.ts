import { createSlice } from "@reduxjs/toolkit";
import { GetAllMainCategory, GetMainCategoryById } from "../features/action";
import { useSelector } from "react-redux";
import { MainCategoryProps } from "../interface";

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
     extraReducers: {
          [GetAllMainCategory.fulfilled.type]: (state, action) => {
               state.data = action.payload;
               state.loading = false;
          },
          [GetAllMainCategory.pending.type]: (state) => {
               state.loading = true;
          },
          [GetAllMainCategory.rejected.type]: (state, action) => {
               state.error = action.payload as string;
          },
          [GetMainCategoryById.fulfilled.type]: (state, action) => {
               state.single = action.payload;
               state.loading = true;
          },
          [GetMainCategoryById.pending.type]: (state) => {
               state.loading = true;
          },
          [GetMainCategoryById.rejected.type]: (state, action) => {
               state.error = action.payload as string;
          },
     },
});

export const MainCategoryReducer = MainCategorySlice.reducer;
// export const {} = MenuSlice.actions
export const useMainCategorySelector = () =>
     useSelector((state: any) => {
          return state.mainCategory;
     });
