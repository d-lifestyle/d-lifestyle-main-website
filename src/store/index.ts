import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
     AccommodationReducer,
     CarouselReducer,
     CategoryReducer,
     MainCategoryReducer,
     SubCategoryReducer,
     ToursTravelReducer,
} from "../slice";

export const RootReducer = combineReducers({
     category: CategoryReducer,
     carousel: CarouselReducer,
     subcategory: SubCategoryReducer,
     mainCategory: MainCategoryReducer,
     // inventories
     accommodation: AccommodationReducer,
     toursTravel: ToursTravelReducer,
});

export const store = configureStore({
     reducer: RootReducer,
});
