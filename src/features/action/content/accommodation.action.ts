import { createAsyncThunk } from "@reduxjs/toolkit";
import accommodationService from "../../../service/accommodation.server";

const GetAllAccommodation = createAsyncThunk("accommodation/all", async () => {
     const data = await accommodationService.GetAccommodation();
     return data.data.data;
});

const GetAccommodationById = createAsyncThunk("accommodation/by-id", async (props: string) => {
     const data = await accommodationService.GetAccommodationById(props);
     return data.data.data;
});

export { GetAccommodationById, GetAllAccommodation };
