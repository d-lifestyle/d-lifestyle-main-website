import { createSlice } from "@reduxjs/toolkit";
import { GetAllCategory, GetCategoryById } from "../features/action";
import { useSelector } from "react-redux";
import { AccommodationProps, CategoriesProps, MainCategoryProps, ToursTravelProps } from "../interface";

interface InitialCategoryProps {
     loading: boolean;
     data: CategoriesProps[];
     error?: string;
     success?: string;
     single?: CategoriesProps;
     tours: CategoriesProps[];
     lifeStyle: CategoriesProps[];
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
     reducers: {
          FilterAccommodation: (state, action) => {
               state.loading = true;
               state.data.map((element: any) => {
                    if (action.payload === element.parentCategory._id) {
                         state.tours.push(element);
                    }
               });
               state.loading = false;
          },
          FilterToursPackages: (state, action) => {
               state.loading = true;
               state.data.map((element: any) => {
                    if (element.parentCategory._id === action.payload) {
                         state.lifeStyle.push(element);
                    }
               });
               state.loading = false;
          },
     },
     extraReducers: {
          [GetAllCategory.fulfilled.type]: (state, action) => {
               state.data = action.payload;
               state.loading = false;
          },
          [GetAllCategory.pending.type]: (state) => {
               state.loading = true;
          },
          [GetAllCategory.rejected.type]: (state, action) => {
               state.error = action.payload as string;
          },
          [GetCategoryById.fulfilled.type]: (state, action) => {
               state.single = action.payload;
               state.loading = true;
          },
          [GetCategoryById.pending.type]: (state) => {
               state.loading = true;
          },
          [GetCategoryById.rejected.type]: (state, action) => {
               state.error = action.payload;
          },
     },
});

export const CategoryReducer = CategorySlice.reducer;
export const { FilterAccommodation, FilterToursPackages } = CategorySlice.actions;
export const useCategorySelector = () =>
     useSelector((state: any) => {
          return state.category;
     });
