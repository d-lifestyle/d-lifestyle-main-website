import { createSlice } from "@reduxjs/toolkit";
import { DataStateProps, RentalProps } from "../../interface";
import { ListRentalAction, ListRentalByIdAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const InitialState: DataStateProps<RentalProps> = {
     data: {} as RentalProps[],
     error: "",
     loading: false,
     single: {} as RentalProps,
     success: "",
};

const RentalSlice = createSlice({
     initialState: InitialState,
     name: "rental",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(ListRentalAction.fulfilled, (state, action) => {
                    state.data = action.payload.data;
                    state.loading = false;
               })
               .addCase(ListRentalAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListRentalAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
          builder
               .addCase(ListRentalByIdAction.fulfilled, (state, action) => {
                    state.single = action.payload.data;
               })
               .addCase(ListRentalByIdAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ListRentalByIdAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const RentalReducer = RentalSlice.reducer;
export const useRentalSelector = () =>
     useSelector((state: RootState) => {
          return state.rental;
     });
