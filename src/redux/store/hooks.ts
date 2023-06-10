import { combineReducers } from "@reduxjs/toolkit";
import { store } from "./store";
import {
     TourPackageReducer,
     AccommodationReducer,
     CategoryReducer,
     SubCategoryReducer,
     CarouselReducer,
     CruiseReducer,
     RentalReducer,
     ContentReducer,
} from "../slice";
import { useDispatch } from "react-redux";

export const rootReducer = combineReducers({
     accommodation: AccommodationReducer,
     tours_package: TourPackageReducer,
     category: CategoryReducer,
     sub_category: SubCategoryReducer,
     carousel: CarouselReducer,
     cruise: CruiseReducer,
     rental: RentalReducer,
     content: ContentReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
