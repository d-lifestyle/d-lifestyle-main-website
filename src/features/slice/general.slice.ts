import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "..";
import { ContactMeAction, SendEnquiryAction, WebContentAction } from "../action";
import { UserProps } from "../../interface";

interface InitialGeneralProps {
     success: string;
     error: string;
     loading: boolean;
     content: UserProps;
}

const InitialStateGeneral: InitialGeneralProps = {
     content: {} as UserProps,
     error: "",
     loading: false,
     success: "",
};
const GeneralSlice = createSlice({
     name: "general",
     initialState: InitialStateGeneral,
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
          builder
               .addCase(WebContentAction.fulfilled, (state, action) => {
                    state.success = "got the data";
                    state.content = action.payload;
               })
               .addCase(WebContentAction.pending, (state, action) => {
                    state.loading = true;
               })
               .addCase(WebContentAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const GeneralReducer = GeneralSlice.reducer;
export const useGeneralSelector = () =>
     useSelector((state: RootState) => {
          return state.general;
     });
