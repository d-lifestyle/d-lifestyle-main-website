import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
     CarouselReducer,
     CategoryReducer,
     SubCategoryReducer,
     MainCategoryReducer,
     AccommodationReducer,
     ToursTravelReducer,
     GeneralReducer,
} from "../features/slice";

export const RootReducer = combineReducers({
     category: CategoryReducer,
     carousel: CarouselReducer,
     subcategory: SubCategoryReducer,
     mainCategory: MainCategoryReducer,
     // inventories
     accommodation: AccommodationReducer,
     toursTravel: ToursTravelReducer,
     general: GeneralReducer,
});

export const store = configureStore({
     reducer: RootReducer,
});
