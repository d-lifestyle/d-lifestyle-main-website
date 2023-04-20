import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
     AccommodationReducer,
     CarouselReducer,
     CategoryReducer,
     SubCategoryReducer,
     ToursTravelReducer,
} from "../slice";

const rootReducer = combineReducers({
     // content
     category: CategoryReducer,
     carousel: CarouselReducer,
     subcategory: SubCategoryReducer,
     // inventories
     accommodation: AccommodationReducer,
     toursTravel: ToursTravelReducer,
});

const Store = configureStore({
     reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof Store.dispatch;
export { Store };
