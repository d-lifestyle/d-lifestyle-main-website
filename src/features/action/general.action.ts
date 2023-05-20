import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactFormProps, EnquiryFormProps } from "../../interface";
import GeneralService from "../../service/general.service";

export const ContactMeAction = createAsyncThunk("contact/new", async (props: ContactFormProps, { rejectWithValue }) => {
     try {
          const data = await GeneralService.ContactMe(props);
          return data.data.data;
     } catch (err: any) {
          if (err.response) {
               return rejectWithValue(err.response.data.message);
          } else {
               return rejectWithValue(err.message);
          }
     }
});

export const SendEnquiryAction = createAsyncThunk(
     "enquiry/new",
     async (props: EnquiryFormProps, { rejectWithValue }) => {
          try {
               const data = await GeneralService.EnquirySend(props);
               return data.data.data;
          } catch (err: any) {
               if (err.response) {
                    return rejectWithValue(err.response.data.message);
               } else {
                    return rejectWithValue(err.message);
               }
          }
     }
);
