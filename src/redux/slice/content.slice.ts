import { createSlice } from "@reduxjs/toolkit";
import { GetAdminContentAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface InitialStateProps {
     data: any;
     error: string;
}

const InitialState: InitialStateProps = {
     data: {} as any,
     error: "",
};

const ContentSlice = createSlice({
     initialState: InitialState,
     name: "content",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(GetAdminContentAction.fulfilled, (state, action) => {
                    state.data = action.payload.data;
               })
               .addCase(GetAdminContentAction.rejected, (state, action) => {
                    state.error = (action.payload as any).data as string;
               });
     },
});

export const ContentReducer = ContentSlice.reducer;
export const useContentSelector = () =>
     useSelector((state: RootState) => {
          return state.content;
     });
