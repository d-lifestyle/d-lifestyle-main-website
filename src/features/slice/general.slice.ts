import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { ContactMeAction, SendEnquiryAction } from "../action";

const GeneralSlice = createSlice({
     name: "general",
     initialState: {
          success: "",
          error: "",
          loading: false,
     },
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(ContactMeAction.fulfilled, (state, action) => {
                    state.success = action.payload;
               })
               .addCase(ContactMeAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(ContactMeAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
          builder
               .addCase(SendEnquiryAction.fulfilled, (state, action) => {
                    state.success = action.payload;
               })
               .addCase(SendEnquiryAction.pending, (state) => {
                    state.loading = true;
               })
               .addCase(SendEnquiryAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const GeneralReducer = GeneralSlice.reducer;
export const useGeneralSelector = () =>
     useSelector((state: RootState) => {
          return state.general;
     });
