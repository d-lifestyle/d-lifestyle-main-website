import { createSlice } from "@reduxjs/toolkit";
import { BlogProps } from "../../interface";
import { BlogListAction } from "../action";
import { useSelector } from "react-redux";
import { RootState } from "..";

interface InitialBlogProps {
     loading: boolean;
     data: BlogProps[];
     error: string;
     success: string;
}

const InitialBlogState: InitialBlogProps = {
     loading: false,
     data: [],
     error: "",
     success: "",
};

const BlogSlice = createSlice({
     initialState: InitialBlogState,
     name: "blog",
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(BlogListAction.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.loading = false;
               })
               .addCase(BlogListAction.pending, (state) => {
                    state.loading;
               })
               .addCase(BlogListAction.rejected, (state, action) => {
                    state.error = action.payload as string;
               });
     },
});

export const BlogReducer = BlogSlice.reducer;
// export const {} = CarouselSlice.actions
export const useBlogSelector = () =>
     useSelector((state: RootState) => {
          return state.carousel;
     });
