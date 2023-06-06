import { createAsyncThunk } from "@reduxjs/toolkit";
import ToursPackageService from "../../service/tours-package";

export const ListToursPackageAction = createAsyncThunk("tours_package/all", async (_, { rejectWithValue }) => {
     try {
          const data = await ToursPackageService.ToursPackageList();
          return await data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const ListToursPackageByIdAction = createAsyncThunk(
     "tours_package/id",
     async (props: string, { rejectWithValue }) => {
          try {
               const data = await ToursPackageService.ToursPackageListById(props);
               return await data.data;
          } catch (err: any) {
               if (err.response) {
                    return rejectWithValue(err.response.data.message);
               } else {
                    return rejectWithValue(err.message);
               }
          }
     }
);
