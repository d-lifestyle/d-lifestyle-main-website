import { createSlice } from "@reduxjs/toolkit";
import { DataStateProps, ToursTravelProps } from "../../interface";
import { ListToursPackageAction, ListToursPackageByIdAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const InitialState: DataStateProps<ToursTravelProps> = {
     data: [] as ToursTravelProps[],
     error: "",
     loading: false,
     single: {} as ToursTravelProps,
     success: "",
};

const TourPackageSlice = createSlice({
     initialState: InitialState,
     name: "tours_package",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(ListToursPackageAction.fulfilled, (state, action) => {
                    state.data = action.payload.data;
                    state.loading = false;
               })
               .addCase(ListToursPackageAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListToursPackageAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
          builder
               .addCase(ListToursPackageByIdAction.fulfilled, (state, action) => {
                    state.single = action.payload.data;
               })
               .addCase(ListToursPackageByIdAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListToursPackageByIdAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const TourPackageReducer = TourPackageSlice.reducer;
export const useTourPackageSelector = () =>
     useSelector((state: RootState) => {
          return state.tours_package;
     });
