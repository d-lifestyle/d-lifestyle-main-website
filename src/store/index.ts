import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CarouselReducer, CategoryReducer, SubCategoryReducer, MainCategoryReducer, AccommodationReducer, ToursTravelReducer } from "../features/slice";


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
