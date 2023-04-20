import { createAsyncThunk } from "@reduxjs/toolkit";
import toursTravelService from "../../../service/tours-travel.service";

const GetAllToursTravel = createAsyncThunk("toursTravel/all", async () => {
     const data = await toursTravelService.GetToursTravel();
     return data.data.data;
});

const GetToursTravelById = createAsyncThunk("toursTravel/by-id", async (props: string) => {
     const data = await toursTravelService.GetToursTravelById(props);
     return data.data.data;
});

export { GetToursTravelById, GetAllToursTravel };
