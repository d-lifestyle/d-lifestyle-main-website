import { createAsyncThunk } from "@reduxjs/toolkit";
import CarouselService from "../../service/carousel.service";

export const ListCarouselAction = createAsyncThunk("carousel/all", async (_, { rejectWithValue }) => {
     try {
          const data = await CarouselService.CategoryList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});
