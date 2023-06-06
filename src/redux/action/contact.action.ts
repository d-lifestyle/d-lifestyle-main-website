import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactFormProps } from "../../interface";
import ContactService from "../../service/contact";

export const MakeContactAction = createAsyncThunk(
     "contact/make",
     async ({ email, name, phone, body, placeToVisit, favorite }: ContactFormProps, { rejectWithValue }) => {
          try {
               const data = await ContactService.MakeContact({
                    email,
                    name,
                    phone,
                    body,
                    placeToVisit,
                    favorite,
               });
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
